"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sliderList = [
    {
      id: 1,
      imageUrl: "/assets/common/homepage1.webp",
      title: "Discover Your Dream Home with Sobha Realty Brokers",
      subtitle:
        "Find the perfect property that suits your lifestyle and budget.",
      link: "/",
      location: "Dubai",
    },
    {
      id: 2,
      imageUrl: "/assets/common/homepage2.webp",
      title: "Experience Excellence in Real Estate with Sobha Realty Brokers",
      subtitle:
        "Your trusted partner for buying, selling, and investing in properties.",
      link: "/",
      location: "Abu Dhabi",
    },
    {
      id: 3,
      imageUrl: "/assets/common/homepage3.webp",
      title: "Unlock the Door to Your Future with Sobha Realty Brokers",
      subtitle:
        "Expert guidance and personalized service for all your real estate needs.",
      link: "/",
      location: "Dubai",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); 

  // Autoplay interval effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderList.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [sliderList.length]);

  // Reset autoplay on manual slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // GSAP refs
  const slideRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // GSAP animation on slide change
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate background with scale and fade
    tl.fromTo(
      backgroundRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
    );

    // Stagger animate content elements
    tl.fromTo(
      titleRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.6",
    );

    tl.fromTo(
      subtitleRef.current,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.5",
    );

    tl.fromTo(
      locationRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4",
    );

    tl.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3",
    );
  }, [currentSlide]);


  const currentItem = sliderList[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Current Slide */}
        <div key={currentItem.id} ref={slideRef} className="relative">
          {/* Background layer */}
          <div
            ref={backgroundRef}
            aria-hidden
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentItem.imageUrl})`,
              filter: "grayscale(0%) brightness(80%)",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
          {/* Content */}
          <div
            ref={contentRef}
            className="relative z-20 h-dvh max-lg:gap-[40px_0] p-[160px_0px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[100px_20px_40px] max-w-7xl mx-auto flex items-center justify-between max-lg:flex-col w-full px-4"
          >
            <div className="space-y-6">
              {/* location icon */}
              <div
                ref={locationRef}
                className="flex items-center gap-2 text-white/80"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[22px] font-medium">
                  {currentItem.location}
                </span>
              </div>
              <h1
                ref={titleRef}
                className="text-[60px] max-xl:text-[50px] max-lg:text-[40px] max-md:text-[32px] font-semibold text-white leading-tight"
              >
                {currentItem.title}
              </h1>
              <p
                ref={subtitleRef}
                className="text-[20px] max-lg:text-[18px] max-md:text-[16px] text-white/90 max-w-2xl"
              >
                {currentItem.subtitle}
              </p>
            </div>


            {/* Action Button */}
            <div className="absolute bottom-12 max-lg:bottom-8 right-8 max-lg:right-4">
              <a
                ref={buttonRef}
                href={currentItem.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                  <span>Explore Properties</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 max-lg:bottom-8 left-8 max-lg:left-4 z-30 flex gap-3">
              {sliderList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      gsap.to(e.currentTarget, { scale: 1.2, duration: 0.2 });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                    }
                  }}
                  className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-20"
                      : "bg-white/50 hover:bg-white/75 w-12"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
