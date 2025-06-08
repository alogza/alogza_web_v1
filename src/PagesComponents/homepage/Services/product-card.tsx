"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  isAnimating: boolean;
}

export default function ProductCard({
  product,
  isActive,
  isNext,
  isPrev,
  isAnimating,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive || isAnimating) return;

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = "";
    };

    if (isActive) {
      window.addEventListener("mousemove", handleMouseMove);
      cardRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
    const card = cardRef.current;
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (card) {
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isActive, isAnimating]);

  return (
    <div
      ref={cardRef}
      className={clsx(
        "absolute inset-0 transition-all duration-500 ease-out",
        isActive
          ? "opacity-100 z-30 translate-x-0 scale-100"
          : isNext
            ? "opacity-0 z-20 translate-x-[100%] scale-90"
            : isPrev
              ? "opacity-0 z-10 translate-x-[-100%] scale-90"
              : "opacity-0 z-0 translate-x-0 scale-75"
      )}
      style={{
        transitionProperty: "transform, opacity",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className={clsx(
            "relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full",
            "transition-all duration-500 ease-out transform",
            isActive ? "scale-100" : "scale-90",
            product.color === "purple"
              ? "bg-purple-400"
              : product.color === "black"
                ? "bg-gray-800"
                : "bg-gray-100"
          )}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] transform transition-all duration-700">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain transform transition-all duration-700"
                style={{
                  transform: isActive ? "translateZ(50px)" : "translateZ(0)",
                }}
                priority={isActive}
              />
            </div>
          </div>

          <div className="absolute -right-4 -top-4 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold shadow-lg">
            <span className="text-sm">NEW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
