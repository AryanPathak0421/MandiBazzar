import { useState, useEffect } from "react";

interface InlineBannerProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function InlineBanner({ images, autoPlayInterval = 4000 }: InlineBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default fallback images if none provided
  const defaultImages = [
    "/banners/first.png",
    "/banners/second.png",
    "/banners/third.png"
  ];

  const displayImages = images && images.length > 0 ? images : defaultImages;

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [displayImages.length, autoPlayInterval]);

  if (!displayImages || displayImages.length === 0) return null;

  return (
    <div className="px-4 my-4">
      <div className="relative w-full h-28 md:h-36 rounded-xl overflow-hidden shadow-md">
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Dots indicator */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-4 shadow-md"
                    : "bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
