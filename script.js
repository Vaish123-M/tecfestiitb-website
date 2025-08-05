// Hero content slide-in animation
gsap.to(".hero-content", {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power3.out"
});

// CTA button pulse animation
gsap.to(".cta-button", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
});

// Scroll-triggered section fade-in
gsap.utils.toArray(".section-container").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
});

// Navbar slide-in from top
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});
