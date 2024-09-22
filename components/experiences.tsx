"use client";

import React, { useState } from "react";
import Heading from "@/components/heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useHooks } from "@/lib/hook";
import { useInView } from "react-intersection-observer";
import { useThemeContextProvider } from "@/context-provider/theme-context";

export default function Experiences() {
  const customRef = useHooks(0.3, "Experience");
  const { theme } = useThemeContextProvider();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={customRef}
      id="experience"
      className="scroll-mt-28 mb-20 sm:mb-30"
    >
      <div className="flex flex-col gap-0">
        <Heading>My Experiences</Heading>
        <h1 className="text-center text-md -mt-6 mb-5 text-gray-600 dark:text-gray-300 font-light">
          Professional experience that I have accumulated over several years.
        </h1>
      </div>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: " 1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.05)",
                }}
                visible={inView}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                  visibility: "visible",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
