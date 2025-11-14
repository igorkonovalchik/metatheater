import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

const InstagramGallery = () => {
  // Using the actual images from the public folder
  const galleryImages = [
    { id: 1, url: '/2025-11-14 12.21.57.jpg' },
    { id: 2, url: '/2025-11-14 12.22.38.jpg' },
    { id: 3, url: '/2025-11-14 12.22.55.jpg' },
    { id: 4, url: '/2025-11-14 12.23.13.jpg' },
    { id: 5, url: '/2025-11-14 12.24.06.jpg' },
    { id: 6, url: '/2025-11-14 12.25.05.jpg' },
    { id: 7, url: '/2025-11-14 12.25.25.jpg' },
    { id: 8, url: '/2025-11-14 12.26.46.jpg' },
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1a1a]/30 relative z-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-[#FFD33D] mb-4 text-center">
          Из жизни МетаТеатра
        </h2>
        <p className="text-center text-lg mb-8 text-[#e0e0e0]">
          Подпишитесь на наш Instagram @meta__theater
        </p>
        
        {/* Instagram Icon and Link */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://www.instagram.com/meta__theater/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD33D] text-[#121212] p-4 rounded-full hover:bg-[#FFD33D]/90 transition-all"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Swiper Carousel */}
        <style jsx>{`
          .instagram-gallery img, .instagram-gallery video {
            max-width: 100%;
            height: 50vh;
          }
          
          /* Hide navigation arrows on mobile */
          @media (max-width: 767px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
        `}</style>
        
        <div className="relative instagram-gallery">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 'auto',
              },
            }}
            className="w-full"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id} className="w-[350px]">
                <div className="w-full p-2">
                  <div className="w-full border-4 border-[#FFD33D] bg-[#121212] flex items-center justify-center">
                    <img
                      src={image.url}
                      alt={`Instagram post ${index + 1}`}
                      className="w-full object-cover filter grayscale"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Navigation buttons - hidden on mobile */}
            <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-[#121212]/70 text-[#FFD33D] p-2 rounded-full hover:bg-[#121212] transition-all z-10 after:text-sm after:font-bold after:text-[#FFD33D]"></div>
            <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-[#121212]/70 text-[#FFD33D] p-2 rounded-full hover:bg-[#121212] transition-all z-10 after:text-sm after:font-bold after:text-[#FFD33D]"></div>
          </Swiper>
          
          {/* Pagination dots below the slider */}
          <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;