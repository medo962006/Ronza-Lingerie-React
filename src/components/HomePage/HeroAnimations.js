// src/components/HomePage/HeroAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initHeroAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Parallax effect on scroll
  gsap.to('.hero-section', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.3,
    ease: 'none'
  });
};