'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ExperienceCard } from "./ui/experience-card";


type Card = {
  year: number;
  title: string;
  description: string;
  thumbnail: string;
};


export const Experience = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards: Card[] = useMemo(() => ([
    {
      year: 2024,
      title: "Software Engineering Academy Participant at COMPFEST 16",
      description:
      "Selected as one of 20 individual participants among thousands of applicants in Indonesia. Participated in a 2-month software engineering bootcamp focused on Microservices, Clean Code, Clean Architecture, API, Design Patterns, CI/CD, and Security. Collaborated with a team of four to build Seatudy, an online learning platform.",
      thumbnail: "/best-team-compfest.JPG",
    },
    {
      year: 2024,
      title: "Awarded Best Team at COMPFEST 16",
      description:
      "My team won the Best Team award at COMPFEST 16 Graduation Night, recognized for our outstanding project ABILILINK. An application that connects people with disability to job opportunities.",
      thumbnail: "/best-case-study.png",
    },
    {
      year: 2025,
      title: "Front-End Development Class Mentor",
      description:
        "I mentored and delivered 13 online hands-on sessions covering front-end web development fundamentals. Taught topics including HTML, CSS, JavaScript, Git, Bootstrap, React, and Next.js, helping students build their own interactive web projects.",
      thumbnail: "/mentor.png",
    },
    {
      year: 2025,
      title: "Top 10 Finalist of DOW Heroes of Innovation Program",
      description:
        "Achieved 6th position in the DOW Heroes of Innovation Program 2025 with a team project developing ReBio, an IoT-powered eco-enzyme monitoring system. The solution enables real-time tracking of eco-enzyme quality and conditions through a mobile application.",
      thumbnail: "/rebio-go-certificate.jpg",
    }
  ]), []);

  // Observe which card is most centered/visible inside the scroller
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));

    // Fine-grained thresholds for smooth detection
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });

        if (best!.target) {
          const idx = Number((best!.target as HTMLElement).dataset.index);
          if (idx !== activeIndex) { // only update if it's actually different
            setActiveIndex(idx);
          }
        }
      },
      { root, threshold: thresholds }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [activeIndex]);

  useEffect(() => {
    cards.forEach((card) => {
      const img = new window.Image();
      img.src = card.thumbnail;
    });
  }, [cards]);

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-20 font-primary">
      <div className="text-4xl font-semibold">Experience & Awards</div>
      <div className="flex items-center justify-center gap-20" id="experience">
        <div
          ref={scrollerRef}
          className="
            flex flex-col
            overflow-y-auto 
            max-h-[27rem]
            pr-2
            snap-y snap-mandatory 
            fade-mask
            scrollbar-hidden
          "
        >
          {cards.map((c, i) => (
            <div
              key={i}
              data-card
              data-index={i}
              className={`
                flex
                snap-center
                transition-opacity duration-300
                will-change-[opacity,transform]
                ${i === 0 ? "pt-[1.5vh]" : i === cards.length - 1 ? "pb-[1.5vh]" : "py-10"}
                items-center
              `}
              style={{ opacity: activeIndex === i ? 1 : 0.3 }}
              onClick={() => setActiveIndex(i)}
            >
              <ExperienceCard
                year={c.year}
                title={c.title}
                description={c.description}
                isActive={activeIndex === i}
              />
            </div>
          ))}
        </div>

        <div className="relative w-[600px] h-[400px]">
          {cards.map((card, i) => (
            <Image
              key={i}
              src={card.thumbnail}
              alt={`Experience ${i}`}
              fill
              draggable={false}
              className={`rounded-xl absolute inset-0 transition-opacity duration-500
                ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};