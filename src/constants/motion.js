export const navbarVariants = {
    default: {
        backdropFilter: "blur(0px)",
        backgroundColor: "#1B1B1B",
        borderBottomColor: "#1B1B1B",
    },
    active: {
        backdropFilter: "blur(0px)",
        backgroundColor: "#1B1B1B",
        borderBottomColor: "#1B1B1B",
    },
    slide: {
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.3,
        },
    },
};

export const mobileMenuVariants = {
    hidden: {
        clipPath: "inset(0 0 100% 0)",
    },
    visible: {
        clipPath: "inset(0%)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const leftSideVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.8,
        },
    },
};

export const rightSideVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.5,
        },
    },
};

export const centerVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.1,
        },
    },
};
