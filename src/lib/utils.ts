import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Shared intersection observer instance
let observer: IntersectionObserver | null = null;

export function getIntersectionObserver(callback: IntersectionObserverCallback) {
  if (!observer) {
    observer = new IntersectionObserver(callback, {
      threshold: 0.2,
      rootMargin: '50px'
    });
  }
  return observer;
}

export function useSharedIntersectionObserver(element: HTMLElement | null, callback: IntersectionObserverCallback) {
  if (element) {
    const obs = getIntersectionObserver(callback);
    obs.observe(element);
    return () => {
      if (element) {
        obs.unobserve(element);
      }
    };
  }
  return () => {};
} 