"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import clsx from "clsx"

const products = [
  {
    id: 1,
    name: "Aerphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis nostrum hic officiis ea magni deleniti perspiciatis obcaecati reprehenderit odit?",
    images: [
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "Purple earphone front",
        position: "front",
      },
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "Purple earphone back",
        position: "back",
      },
    ],
    color: "purple",
    price: "$199.99",
  },
  {
    id: 2,
    name: "Aerphone Sport",
    description:
      "Designed for athletes with sweat resistance and secure fit to keep you motivated during intense workouts.",
    images: [
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "Black earphone front",
        position: "front",
      },
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "Black earphone back",
        position: "back",
      },
    ],
    color: "black",
    price: "$149.99",
  },
  {
    id: 3,
    name: "Aerphone Mini",
    description: "Compact and lightweight earbuds perfect for everyday use with impressive battery life and comfort.",
    images: [
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "White earphone front",
        position: "front",
      },
      {
        src: "/placeholder.svg?height=400&width=400",
        alt: "White earphone back",
        position: "back",
      },
    ],
    color: "white",
    price: "$129.99",
  },
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

 
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  })

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <div className="space-y-4 max-w-md">
            <h2 className="text-xl uppercase tracking-wider text-gray-700 font-medium">Design Slider</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{products[currentIndex].name}</h1>
            <p className="text-gray-600 mb-8">{products[currentIndex].description}</p>
            <button className="group flex items-center space-x-2 border-b border-gray-400 pb-1 transition-all hover:border-gray-900">
              <span>See more</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] perspective">
          <div className="relative w-full h-full">
            {products.map((product, index) => {
              // Calculate position relative to current index
              const position = (index - currentIndex + products.length) % products.length

              // Determine z-index and styles based on position
              const zIndex = 30 - position * 10
              const opacity = position === 0 ? 1 : 0.5
              const scale = position === 0 ? 1 : 0.8
              let translateX = 0
              const translateZ = position === 0 ? 0 : -200
              const blur = position === 0 ? 0 : 5

              if (position === 1 || position === products.length - 1) {
                translateX = position === 1 ? 150 : -150
              }

              return (
                <div
                  key={product.id}
                  className="absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center"
                  style={{
                    zIndex,
                    opacity,
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                    filter: `blur(${blur}px)`,
                  }}
                >
                  <div className="relative">
                    {/* Front part of earphone */}
                    <div
                      className={clsx(
                        "relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full",
                        "transition-all duration-700 ease-out transform",
                        product.color === "purple"
                          ? "bg-purple-400"
                          : product.color === "black"
                            ? "bg-gray-800"
                            : "bg-gray-100",
                      )}
                      style={{
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-70"></div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-[40px] h-[40px]">
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <span className="text-white text-xl">+</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                        <div className="relative w-[40px] h-[2px]">
                          <div className="absolute top-0 left-0 w-full h-full bg-red-400"></div>
                        </div>
                      </div>
                    </div>

                    {/* Back part of earphone (smaller circle) */}
                    <div
                      className={clsx(
                        "absolute -right-10 -top-10 w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full",
                        "transition-all duration-700 ease-out transform",
                        product.color === "purple"
                          ? "bg-purple-500"
                          : product.color === "black"
                            ? "bg-gray-900"
                            : "bg-white",
                      )}
                      style={{
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-70"></div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-[30px] h-[30px] rounded-full bg-orange-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            className={clsx(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300 hover:bg-gray-400",
            )}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 600)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

