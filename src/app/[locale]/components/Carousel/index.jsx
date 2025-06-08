// components/Carousel/index.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import CarouselItem from './CarouselItem';

const items = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  img: `/labels/Logo.png`,
}));

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const touchStartX = useRef(0);
  const timeoutRef = useRef();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    resetTimeout();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      // Auto-rotate or other actions
    }, 5000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
  };

  useEffect(() => {
    resetTimeout();
    return () => resetTimeout();
  }, [activeIndex]);

  return (
    <div 
      className="relative h-[800px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute w-full h-[80%] left-1/2 -translate-x-1/2">
        {items.map((item, index) => {
          const position = (index - activeIndex + items.length) % items.length;
          
          return (
            <CarouselItem
              key={item.id}
              img={item.img}
              position={position}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
              isActive={position === 0}
            />
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
      
      <button
        onClick={() => setShowDetail(false)}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 border-b border-gray-500 font-bold transition-opacity ${
          showDetail ? 'opacity-100' : 'opacity-0'
        }`}
      >
        See All ↗
      </button>
    </div>
  );
}