import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     location: {
//         position: 'absolute',
//         left: '42vw',
//         filter: `drop-shadow(0 0 2px ${theme.palette.secondary.dark}e0)`,
//     },
//     locationFoot: {
//         position: 'absolute',
//         bottom: '2%',
//         left: '1%',
//         filter: `drop-shadow(0 0 2px ${theme.palette.secondary.dark}e0)`,
//     },
//     highlight: {
//         color: theme.palette.primary.main,
//     },
//     highlight2: {
//         color: theme.palette.primary.main,
//         fontSize: 15,
//     },
//     areaWrap: {
//         fontSize: 20,
//     },
//     direction: {
//         fontSize: 20,
//         lineHeight: '30px',
//         color: theme.palette.text.main,
//         display: 'inline-block',
//         width: 20,
//         textAlign: 'center',
//     },
//     locationMain: {
//         color: theme.palette.text.main,
//         fontSize: 20,
//     },
//     locationSecondary: {
//         color: theme.palette.text.main,
//         fontSize: 20,
//         marginLeft: 5,
//     },
//     '@keyframes flash': {
//         '0%': {
//             opacity: 1,
//         },
//         '50%': {
//             opacity: 0.1,
//         },
//         '100%': {
//             opacity: 1,
//         },
//     },
// }));

const useStyles = makeStyles((theme) => ({
    location: {
        position: 'absolute',
        top: '2%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: `drop-shadow(0 0 2px ${theme.palette.secondary.dark}e0)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationFoot: {
        position: 'absolute',
        top: '2%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: `drop-shadow(0 0 2px ${theme.palette.secondary.dark}e0)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        color: theme.palette.primary.main,
    },
    highlight2: {
        color: theme.palette.primary.main,
        fontSize: 15,
    },
    areaWrap: {
        fontSize: 20,
    },
    direction: {
        fontSize: 20,
        lineHeight: '30px',
        color: theme.palette.text.main,
        display: 'inline-block',
        width: 20,
        textAlign: 'center',
    },
    locationMain: {
        color: theme.palette.text.main,
        fontSize: 20,
    },
    locationSecondary: {
        color: theme.palette.text.main,
        fontSize: 20,
        marginLeft: 5,
    },
    '@keyframes flash': {
        '0%': {
            opacity: 1,
        },
        '50%': {
            opacity: 0.1,
        },
        '100%': {
            opacity: 1,
        },
    },
}));

export default () => {
    const classes = useStyles();
    const time = useSelector((state) => state.location.time);
    const isShowing = useSelector((state) => state.location.showing);
    const location = useSelector((state) => state.location.location);
    const inVehicle = useSelector((state) => state.vehicle.showing);
    const isShifted = useSelector((state) => state.location.shifted);
    const isBlindfolded = useSelector((state) => state.app.blindfolded);

    if (!isShowing || isBlindfolded) return null;
    return (
        <div
            className={
                inVehicle || isShifted ? classes.location : classes.locationFoot
            }
        >
            <div className={classes.locationMain}>
                <span className={classes.direction}>{location.direction}</span>
                <span className={classes.highlight}> | </span>
                {location.main}
                {/* Crossroad */}
                <span className={classes.locationSecondary}>
                    {location.cross !== '' ? (
                        <span>
                            <span className={classes.highlight}> x </span>
                            {location.cross}
                        </span>
                    ) : null}
                </span>
                <span className={classes.highlight}> | </span>
                <span className={classes.areaWrap}>{location.area}</span>
            </div>
        </div>
    );
};