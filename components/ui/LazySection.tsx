// src/components/ui/LazySection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export default function LazySection({ children, className = "", threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section ref={ref} className={className}>
      {isVisible ? children : <div className="h-48 bg-gray-100 animate-pulse rounded-xl" />}
    </section>
  );
}
