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

export const BACK_URL = 'http://localhost:8000';
export const backURL = (url) => {
    return `${BACK_URL}${url}`;
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

export const timeAgo = (isoString) => {
    if(!isoString) return '';

    const date = new Date(isoString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);   // 초 단위 차이

    const units = [
        { label: "년", seconds: 31536000 },         // 1년 = 365일
        { label: "개월", seconds: 2592000 },        // 1개월 = 30일
        { label: "일", seconds: 86400 },            // 1일
        { label: "시간", seconds: 3600 },           // 1시간
        { label: "분", seconds: 60 },               // 1분
    ];

    for (const unit of units) {
        const value = Math.floor(diff / unit.seconds);
        if (value < 1) continue;
        return `${value} ${unit.label} 전`;
    }
    return "방금 전";
};
