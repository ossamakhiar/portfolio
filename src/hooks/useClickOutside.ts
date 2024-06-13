import { useEffect, useRef } from "react"


const useOutsideClick = (callback: () => void) => {
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapper.current && !wrapper.current.contains(e.target as Node)) {
                callback();
                console.log('click');
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [callback])

    return (wrapper);
}


export default useOutsideClick;