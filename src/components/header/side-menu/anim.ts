export const menuSlide = (direction = "ltr") => ({
  initial: {
    x: direction === "rtl" ? "calc(-100% - 100px)" : "calc(100% + 100px)",
    opacity: 0,
  },
  enter: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: direction === "rtl" ? "calc(-100% - 100px)" : "calc(100% + 100px)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
    },
  },
});

export const curve = {
  initial: (height: number) => ({
    d: `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`,
  }),
  enter: (height: number) => ({
    d: `M100 0 L100 ${height} Q100 ${height / 2} 100 0`,
    transition: {
      duration: 1.0,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  exit: (height: number) => ({
    d: `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const backdrop = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const socialSlide = {
  initial: {
    y: 50,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slide = {
  initial: {
    x: 40,
    opacity: 0,
    y: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.04 * i,
    },
  }),
  exit: (i: number) => ({
    x: 40,
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.02 * i,
    },
  }),
};
