import { useState, useEffect } from 'react';
import MarkDownText from './MarkdownText';

const TypewriterEffect = ({ text, speed, wrapper, delay = 0 } : 
    {
        text: string,
        speed: number,
        delay?: number,
        wrapper: string,
    }
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText('');
        setIndex(0);
    }, [text]);

    useEffect(() => {
        let interval: number;
        let timer: number;

        if (index < text.length) {
            timer = setTimeout(() => {
                interval = setInterval(() => {
                    setIndex(prev => prev + 1);
                }, speed);
            }, delay);
        }

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [text, speed, delay]);

    useEffect(() => {
        if (index > 0 && index <= text.length) {
            setDisplayedText(text.substring(0, index));
        }
    }, [index, text]);

    return <MarkDownText wrapper={wrapper}>{displayedText}</MarkDownText>;
};

export default TypewriterEffect;