import posed from 'react-pose';

export const Container = posed.div({
    enter: { staggerChildren: 50 },
});

export const RouteTransitionWrapper = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
});

export const Paragraph = posed.p({
    enter: { x: 20, opacity: 1 },
    exit: { x: 0, opacity: 0 },
});

export const GetWeatherAnimation = posed.div({
    hidden: { y: -10, x: -10, opacity: 0, transition: { duration: 250 } },
    visible: { y: 0, x: 0, opacity: 1, transition: { duration: 250 } },
});

export const GetForecastAnimation = posed.div({
    hidden: { y: -10, x: -10, opacity: 0 },
    visible: { y: 0, x: 0, opacity: 1, transition: { duration: 2000 } },
});

export const charPoses = {
    exit: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0 },
};

export const Input = posed.input({
    focusable: true,
    init: {
        scale: 1,
    },
    focus: {
        scale: 1.0125,
    },
});

export const Button = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
        scale: 1.0125,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
    },
    press: {
        scale: 1.06125,
        boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
    },
});

export const NavIcon = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        color: '#4a4a4a',
    },
    hover: {
        color: '#3273dc',
    },
    press: {
        color: '#3273dc',
    },
});

export const AnchorLink = posed.a({
    hoverable: true,
    pressable: true,
    init: {
        color: '#3273dc',
    },
    hover: {
        color: '#023ea0',
    },
    press: {
        color: '#023ea0',
    },
});

// Loot Watch New

export const SideMenuPoseWrapper = posed.article({
    left: { x: -100 },
    right: { x: 100 },
});
