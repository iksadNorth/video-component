export const resizeObserverInReact = (ref, callback) => () => {
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            callback({
                target: entry.target, 
                height: entry.contentRect.height, 
                width: entry.contentRect.width
            });
        }
    });

    if (ref.current) {
        resizeObserver.observe(ref.current);
    }

    return () => {
        if (ref.current) {
            resizeObserver.unobserve(ref.current);
        }
    };
};
