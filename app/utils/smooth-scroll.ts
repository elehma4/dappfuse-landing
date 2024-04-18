export const useSmoothScroll = () => {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 371; // Duration in ms, increase for slower scrolling
    let startTime: number | null = null;

    const scroll = (currentTime: number) => {
    if (startTime === null) {
        startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const nextScrollPosition = easeInOutCubic(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, nextScrollPosition);

    if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
    }
    };

    requestAnimationFrame(scroll);
  };
  return smoothScrollTo;
};

// Ease in-out cubic function
function easeInOutCubic(time: number, start: number, change: number, duration: number) {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time * time + start;
    time -= 2;
    return (change / 2) * (time * time * time + 2) + start;
}
  