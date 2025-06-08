// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
// import clsx from "clsx"


// const Clients= () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const testimonials =[
//     {
//       name: "John Doe",
//       position: "CEO, Example Corp",
//       title: "This service has transformed our business!",
//       description: "This service has transformed our business!",
//       image: {
//         url: "/images/testimonial1.jpg",
//         alt: "John Doe"
//       }
//     },
//     {
//       name: "Jane Smith",
//       position: "CTO, Tech Innovations",
//       title: "Exceptional quality and support. Highly recommend!",
//       description: "Exceptional quality and support. Highly recommend!",
//       image: {
//         url: "/images/testimonial2.jpg",
//         alt: "Jane Smith"
//       }
//     },
//     {
//       name: "Alice Johnson",
//       position: "Marketing Director, Creative Agency",
//       title: "A game changer for our marketing strategy.",
//       description: "A game changer for our marketing strategy.",
//       image: {
//         url: "/images/testimonial3.jpg",
//         alt: "Alice Johnson"
//       }
//     }
//   ]
//   const totalTestimonials = testimonials.length

//   const nextTestimonial = () => {
//     if (isAnimating || totalTestimonials <= 1) return

//     setIsAnimating(true)
//     setCurrentIndex((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1))

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 500)
//   }

//   const prevTestimonial = () => {
//     if (isAnimating || totalTestimonials <= 1) return

//     setIsAnimating(true)
//     setCurrentIndex((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1))

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 500)
//   }

//   // Auto-rotate testimonials
//   useEffect(() => {
//     if (totalTestimonials <= 1) return

//     const interval = setInterval(() => {
//       nextTestimonial()
//     }, 8000)

//     return () => clearInterval(interval)
//   }, [currentIndex, totalTestimonials])

//   // Reset current index if testimonials change
//   useEffect(() => {
//     setCurrentIndex(0)
//   }, [testimonials])

//   // Safety check for current index
//   const safeIndex = currentIndex < totalTestimonials ? currentIndex : 0

//   return (
//     <section

//       className="relative w-full overflow-hidden bg-black py-40 text-white"
//     >
//       {/* Grid background */}
//       <div className="absolute inset-0 z-0">
//         <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>
//       </div>

//       {/* Glow effect */}
//       <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC100] opacity-10 blur-[100px]"></div>

//       <div className="container relative z-10 mx-auto px-4">
//         <div className="mx-auto max-w-3xl text-center">
//           {/* {testimonials.title?.length > 0 && (
//             <h2 className="mb-4 text-4xl max-sm:text-2xl font-bold">
//             </h2>
//           )}
          
//           {testimonials.description?.length > 0 && (
//             <div className="mb-16 text-base text-gray-300">
//             </div>
//           )} */}
//         </div>

//         {testimonials.length > 0 ? (
//           <div className="relative mx-auto max-w-4xl">
//             {/* Testimonial card */}
//             <div className="relative mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-[300px_1fr]">
//               {/* Image container with golden border effect */}
//               <div className="relative mx-auto h-[280px] w-[280px] md:h-[300px] md:w-[300px]">
//                 {/* Golden glow */}
//                 <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-[#FFC100] to-[#FFC100]/70 opacity-70 blur-md"></div>

//                 {/* Image frame */}
//                 <div className="absolute inset-2 z-10 overflow-hidden rounded-xl border-2 border-[#FFC100]/30 bg-[#FFC100]/10">
//                   {testimonials[safeIndex]?.image?.url ? (
//                     <div className="relative h-full w-full">
                      
//                     </div>
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center">
//                       <Quote className="h-16 w-16 text-[#FFC100]/50" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Testimonial content */}
//               <div className={clsx("transition-opacity duration-500", isAnimating ? "opacity-0" : "opacity-100")}>
//                 {testimonials[safeIndex]?.description?.length > 0 && (
//                   <div className="mb-6 text-xl font-medium italic leading-relaxed text-justify">
//                   </div>
//                 )}

//                 <div className="flex flex-col">
//                   {testimonials[safeIndex]?.name?.length > 0 && (
//                     <h4 className="text-lg font-bold">
//                     </h4>
//                   )}
                  
//                   {testimonials[safeIndex]?.position?.length > 0 && (
//                     <div className="text-sm text-[#FFC100]">
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Navigation controls (only show if more than one testimonial) */}
//             {totalTestimonials > 1 && (
//               <div className="mt-12 flex justify-center space-x-4">
//                 <button
//                   onClick={prevTestimonial}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white/10"
//                   aria-label="Previous testimonial"
//                   disabled={isAnimating}
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>

//                 <div className="flex items-center space-x-2">
//                   {testimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         if (isAnimating || index === currentIndex) return
//                         setIsAnimating(true)
//                         setCurrentIndex(index)
//                         setTimeout(() => setIsAnimating(false), 500)
//                       }}
//                       className={clsx(
//                         "h-2 w-8 rounded-full transition-all",
//                         index === currentIndex ? "bg-[#FFC100]" : "bg-white/20 hover:bg-white/30"
//                       )}
//                       aria-label={`Go to testimonial ${index + 1}`}
//                       disabled={isAnimating}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextTestimonial}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white/10"
//                   aria-label="Next testimonial"
//                   disabled={isAnimating}
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-black/20 p-8 text-center">
//             <Quote className="mx-auto mb-4 h-12 w-12 text-[#FFC100]/50" />
//             <p className="text-lg italic text-gray-300">No testimonials available yet.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Clients

