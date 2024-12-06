import { useState, useEffect } from 'react';

export function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesPreloaded(true);
      } catch (err) {
        console.error('Error preloading images:', err);
      }
    };

    preloadImages();
  }, [imageList]);

  return imagesPreloaded;
} 