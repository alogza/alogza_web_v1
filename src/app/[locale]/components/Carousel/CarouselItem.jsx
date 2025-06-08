// components/Carousel/CarouselItem.tsx
export default function CarouselItem({
    img,
    position,
    showDetail,
    setShowDetail,
    isActive,
  }) {
    const getPositionClass = () => {
      if (showDetail) {
        return position === 0 ? 'left-0 w-full' : 'left-full opacity-0';
      }
      
      switch (position) {
        case 0: return 'carousel-item-active left-0 w-[70%]';
        case 1: return 'carousel-item-next left-[70%] w-[30%]';
        case 2: return 'carousel-item-hidden left-[100%]';
        default: return 'carousel-item-prev left-[-100%]';
      }
    };
  
    return (
      <div className={`absolute h-full transition-all duration-500 ${getPositionClass()}`}>
        <div className="relative h-full">
          {/* Product Image */}
          <img
            src={img}
            alt="Product"
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 transition-all duration-500 ${
              showDetail ? 'right-1/2' : ''
            }`}
          />
  
          {/* Introduce Section */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-[400px] transition-opacity ${
            isActive && !showDetail ? 'opacity-100' : 'opacity-0'
          }`}>
            
          </div>
  
          {/* Detail Section */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 transition-opacity ${
            showDetail ? 'opacity-100' : 'opacity-0'
          }`}>
            <h2 className="text-6xl font-medium">Aerphone GHTK</h2>
            <p className="text-sm text-gray-500/90 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque...
            </p>
            
            <div className="flex gap-4 border-t border-gray-300/50 pt-4">
              {['6 hours', 'Type-C', 'Android', '5.3', 'Touch'].map((spec, i) => (
                <div key={i} className="text-center min-w-[90px]">
                  <p className="font-bold">{['Used Time', 'Charging', 'Compatible', 'Bluetooth', 'Controlled'][i]}</p>
                  <p className="text-sm">{spec}</p>
                </div>
              ))}
            </div>
  
            <div className="flex gap-2 mt-4">
              <button className="border border-gray-300/80 px-4 py-2 font-medium">
                ADD TO CART
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 font-medium">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }