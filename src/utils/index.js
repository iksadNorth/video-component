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

export const timeRegex = /(?:(\d{1,2}):)?(\d{1,2}):(\d{2})/;
export const timeToSeconds = (timeStr) => {
    const match = timeStr.match(timeRegex);

    if (!match) return 0;

    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = parseInt(match[2], 10);
    const seconds = parseInt(match[3], 10);

    return hours * 3600 + minutes * 60 + seconds;
};

export const backURL = (url) => {
    return `http://localhost:8000${url}`;
};

export const convertToKoreanUnit = (num) => {
    if(!num || isNaN(num)) return '0';
    num = Number(num);

    if (num >= 100000000) {
        return (num / 100000000).toFixed(0) + "억";
    } else if (num >= 10000) {
        return (num / 10000).toFixed(0) + "만";
    } else {
        return num.toString();
    }
};
