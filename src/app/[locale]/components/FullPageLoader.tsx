"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FullPageLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex flex-col items-center">
            <Image
              src="/labels/Logo.png"
              alt="Alogza Logo"
              width={100}
              height={100}
              className="animate-pulse"
            />
            <div className="mt-4 flex space-x-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}