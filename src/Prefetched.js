import { useEffect } from "react";

function PreloadImage() {

    const imageUrl = '/assets/Offline/Offline.png';

    const preloadImage = () => {
        const img = new Image();
        img.src = imageUrl;
    };

    // Call preloadImage when the component mounts
    useEffect(() => {
        preloadImage();
    }, []);

    return null;
};

export default PreloadImage;