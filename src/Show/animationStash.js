export const fadeInOut = {
  enter: {
    opacity: 1,
    transition: { duration: 400 },
    applyAtStart: { display: "inline" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 200 },
    applyAtEnd: { display: "none" }
  }
};

export const BlurIn = {
  enter: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 500 },
    applyAtStart: { display: "inline" }
  },
  exit: {
    filter: "blur(4px)",
    opacity: 0.3,
    transition: { duration: 200 },
    applyAtEnd: { display: "none" }
  }
};
