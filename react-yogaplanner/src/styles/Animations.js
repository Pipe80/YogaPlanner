/* ---- Frontpage Animations ----- */

export const titleAnim = {
    hidden: {
        opacity: 0, 
        x: 20,
    },
    show: {
        opacity: 1, 
        x: 0,
        transition: {
            duration: 1.5,
            staggerChildren: 1,
        }
        
    }
};

export const imageAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2.5
        }
    }
}

/* ------- Nav animations ------- */

export const navAnim = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1, 
        transition: {
            duration: 1,
            transform: "ease-in",
        }
    },
};

/* ------- Scroll animation ------- */

export const scrollReveal = {
    hidden: {
        opacity: 0,
        x: 350
    },
    show: {
        opacity: 1, 
        x: 0,
        transition: {
        }
    },
};
