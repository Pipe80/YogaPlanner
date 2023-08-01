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
            ease: "easeInOut"
        }
    },
};

/* ------- Scroll animation ------- */

export const scrollReveal = {
    hidden: {
        opacity: 0,
        y: '10%',
        transition: { 
            duration: .5,
            ease: "easeInOut"
        },
    },
    show: {
      opacity: 1,
      y: '0%',
      transition: {
        ease: "easeInOut",
        duration: .5,
        staggerChildren: .5,
        delayChildren: 1,
      },
    },
};
