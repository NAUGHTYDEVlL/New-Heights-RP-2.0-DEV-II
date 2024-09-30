import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Slide } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import useInterval from 'react-useinterval';

import { Sanitize } from '../../../util/Parser';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginBottom: 10,
        background: theme.palette.secondary.dark,
        '&.success': {
            background: theme.palette.success.main,
        },
        '&.warning': {
            background: theme.palette.warning.dark,
        },
        '&.error': {
            background: theme.palette.error.main,
        },
        '&.info': {
            background: theme.palette.info.main,
        },
    },
    header: {
        padding: '5px 10px',
        borderBottom: `1px solid ${theme.palette.border.divider}`,
        '.success &': {
            borderBottom: `1px solid ${theme.palette.success.light}`,
        },
        '.warning &': {
            borderBottom: `1px solid ${theme.palette.warning.light}`,
        },
        '.error &': {
            borderBottom: `1px solid ${theme.palette.error.light}`,
        },
        '.info &': {
            borderBottom: `1px solid ${theme.palette.info.light}`,
        },
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    barBg: {
        height: 3,
        background: theme.palette.secondary.light,
        '.success &': {
            background: theme.palette.success.main,
        },
        '.warning &': {
            background: theme.palette.warning.dark,
        },
        '.error &': {
            background: theme.palette.error.main,
        },
        '.info &': {
            background: theme.palette.info.main,
        },
    },
    bar: {
        maxWidth: '100%',
        height: '100%',
        transition: 'width ease-in 0.15s',
        background: theme.palette.text.primary,
    },
    sticky: {
        marginRight: 10,
        color: theme.palette.text.alt,
    },

    icon: {
        marginRight: 10,
    }
}));

export default ({ notification }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [fin, setFin] = useState(false);
    const [timer, setTimer] = useState(0);

    const getTypeIcon = () => {
        switch (notification.type) {
            case 'success':
                return ['fas', 'circle-check'];
            case 'warning':
                return ['fas', 'triangle-exclamation'];
            case 'error':
                return ['fas', 'circle-xmark'];
            default:
                return ['fas', 'circle-info'];
        }
    };

    useEffect(() => {
        setFin(true);
    }, []);

    useEffect(() => {
        if (notification.duration > 0 && timer >= notification.duration) {
            setTimeout(() => {
                setFin(false);
            }, 250);
        }
    }, [timer]);

    useEffect(() => {
        if (notification.hide) {
            setFin(false);
        }
    }, [notification]);

    const onHide = () => {
        dispatch({
            type: 'REMOVE_ALERT',
            payload: {
                id: notification._id,
            },
        });
    };

    const onTick = () => {
        setTimer(timer + 100);
    };

    useInterval(
        onTick,
        notification < 0 || timer >= notification.duration ? null : 100,
    );

    return (
        <Slide direction="left" in={fin} onExited={onHide}>
            <div
                className={`${classes.alert} ${notification.type}`}
                style={
                    Boolean(notification?.style?.alert)
                        ? { ...notification?.style?.alert }
                        : null
                }
            >
                <div className={classes.body} style={ Boolean(notification?.style?.body) ? { ...notification?.style?.body } : null }>
                    <div className={classes.icon}>
                        <div xs={4}>
                            {notification.duration <= 0 && (
                                <FontAwesomeIcon
                                    className={classes.sticky}
                                    icon="thumbtack"
                                />
                            )}
                            <FontAwesomeIcon
                                icon={
                                    Boolean(notification.icon)
                                    ? notification.icon
                                    : getTypeIcon()
                                }
                            />
                            </div>
                    </div>
                    {Sanitize(notification.message)}
                </div>
                {notification.duration > 0 && (
                    <div className={classes.progress}>
                        <div
                            className={classes.barBg}
                            style={
                                Boolean(notification?.style?.progressBg)
                                    ? { ...notification?.style?.progressBg }
                                    : null
                            }
                        >
                            <div
                                className={classes.bar}
                                style={
                                    Boolean(notification?.style?.progress)
                                        ? {
                                            ...notification?.style?.progress,
                                            width: `${
                                                100 -
                                                (timer /
                                                    notification.duration) *
                                                    100
                                                }%`,
                                            }
                                        : {
                                            width: `${
                                                100 -
                                                (timer /
                                                    notification.duration) *
                                                    100
                                                }%`,
                                            }
                                }
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </Slide>
    );
};