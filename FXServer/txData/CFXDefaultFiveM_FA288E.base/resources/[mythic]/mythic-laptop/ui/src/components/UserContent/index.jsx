import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import parse from 'html-react-parser';
import Lightbox from 'react-image-lightbox';
import Embed from 'react-tiny-oembed';
import { Sanitize } from '../../util/Parser';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAlert } from '../../hooks';

const useStyles = makeStyles((theme) => ({
	copyableText: {
		color: theme.palette.primary.main,
		textDecoration: 'underline',
		'&:hover': {
			transition: 'color ease-in 0.15s',
			color: theme.palette.text.main,
			cursor: 'pointer',
		},
	},
}));

export default (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const alert = useAlert();
	const [lbImg, setLbImg] = useState(null);

	const onCopyLink = () => {
		alert('Link Copied To Clipboard');
	}

	return (
		<>
			<div className={`${props.wrapperClass} ck-content`}>
				{parse(props.content, {
					...props.options,
					replace: (domNode) => {
						if (domNode?.name == 'img') {
							return (
								<img
									onClick={() => setLbImg(domNode.attribs.src)}
									src={domNode.attribs.src}
									className={`${props.wrapperClass} image`}
								/>
							);
						} else if (domNode?.name === 'a') {
							return (
								<CopyToClipboard
									text={domNode.attribs['href']}
									onCopy={onCopyLink}
								>
									<span className={classes.copyableText}>{domNode.children[0].data}</span>
								</CopyToClipboard>
							);
						} else if (domNode?.name === 'iframe') {
							let src =
								domNode.attribs['data-embed-src'] != null
									? domNode.attribs['data-embed-src']
									: domNode.attribs.src;
							return (
								<iframe
									className={`${props.wrapperClass} video`}
									width="100%"
									height="450px"
									src={src}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							);
						} else if (domNode?.name === 'oembed') {
							return (
								<Embed
									options={{ theme: 'dark' }}
									ImgComponent={({ responce }) => {
										return (
											<img
												onClick={() => setLbImg(responce.url)}
												src={responce.url}
												alt={responce.author_name}
												className={`${props.wrapperClass} image`}
											/>
										);
									}}
									url={domNode.attribs.url}
									proxy={process.env.REACT_APP_CORS_PROXY}
									LoadingFallbackElement="Loading"
								/>
							);
						} else if (domNode?.type === 'text') {
							return <>{Sanitize(domNode.data)}</>;
						}
					},
				})}
			</div>
			{lbImg != null && <Lightbox mainSrc={lbImg} onCloseRequest={() => setLbImg(null)} />}
		</>
	);
};
