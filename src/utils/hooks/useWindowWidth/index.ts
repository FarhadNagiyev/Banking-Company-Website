
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // İlk başta pencere genişliğini ayarlıyoruz
        handleResize();

        // Pencere boyutu değiştiğinde handleResize fonksiyonunu çağırıyoruz
        window.addEventListener('resize', handleResize);

        // Component unmount olduğunda event listener'ı temizliyoruz
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};

export default useWindowWidth;

// istifade numunesi
// (const width = useWindowsWidth())