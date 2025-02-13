import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => 
    current === images.length - 1 ? 0 : current + 1
  );

  const prev = () => setCurrentIndex((current) => 
    current === 0 ? images.length - 1 : current - 1
  );

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="absolute w-full h-full object-cover"
          alt="Workshop"
        />
      </AnimatePresence>
      
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
      >
        <ChevronLeft />
      </button>
      
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}