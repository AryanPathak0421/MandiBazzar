import { useState, useEffect } from "react";

interface BannerProps {
  banners?: Array<{
    id: string;
    image: string;
    title?: string;
    link?: string;
  }>;
}

export default function SimpleBanner({ banners }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Always use local banner images
  const displayBanners = [
    {
      id: "1",
      image: "/banners/first.png",
      title: "Welcome to Mandi Bazaar",
    },
    {
      id: "2",
      image: "/banners/second.png",
      title: "Special Offers",
    },
    {
      id: "3",
      image: "/banners/third.png",
      title: "Fresh Products Daily",
    },
  ];

  // Auto-rotate banners
  useEffect(() => {
    if (displayBanners.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayBanners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [displayBanners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="px-4 pt-3 pb-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="relative rounded-2xl overflow-hidden shadow-md border border-green-100" style={{ height: "160px" }}>
        {/* Banners */}
        {displayBanners.map((banner, index) => (
          <div
            key={banner.id || index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {banner.image ? (
              <img
                src={banner.image}
                alt={banner.title || "Banner"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-r ${
                  (banner as any).bgColor || "from-orange-400 to-orange-500"
                } flex items-center justify-center`}
              >
                <div className="text-center text-white p-6">
                  <h2 className="text-xl font-bold mb-2">
                    {banner.title || "Special Offer"}
                  </h2>
                  <p className="text-sm mb-3 opacity-90">Check out our latest deals</p>
                  <button className="bg-white text-orange-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-lg">
                    SHOP NOW
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pagination Dots */}
        {displayBanners.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {displayBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-6 h-2 bg-white shadow-md"
                    : "w-2 h-2 bg-white/60"
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
