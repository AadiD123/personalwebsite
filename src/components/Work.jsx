import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

import { CustomNextArrow } from "./CarouselArrows";
import { CustomPrevArrow } from "./CarouselArrows";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const work = [
  {
    name: "Full Stack Software Engineer",
    company: "Purdue University Center For Career Opportunities",
    description:
      "I work part-time throughout the school year as a full stack software engineer for Purdue University's Center For Career Opportunities.",
    tools: ["C#", ".NET", "SQL", "HTML", "CSS", "JavaScript"],
    date: "Dec 2023 - Present",
  },
  {
    name: "Undergraduate Teaching Assistant for CS 193 Tools",
    company: "Purdue University",
    description:
      "I cultivated a foundational understanding of programming tools, such as Github and Terminal, that will help students throughout their careers. I also led weekly supplementary sessions for 93 students to resolve any misconceptions they might have.",
    tools: ["Teaching"],
    date: "Aug 2023 - Dec 2023",
  },
  {
    name: "IT Specialist",
    company: "AdaQuest",
    description:
      "I cultivated a foundational understanding of programming tools, such as Github and Terminal, that will help students throughout their careers. I also led weekly supplementary sessions for 93 students to resolve any misconceptions they might have.",
    tools: [
      "Microsoft Azure",
      "Microsoft Intune",
      "Microsoft Endpoint Manager",
    ],
    date: "Sep 2021 - Jun 2022",
  },
  {
    name: "Lead Software Engineer",
    company: "Reach For The Stars",
    description:
      "I was in charge of the nonprofit's entire website revamp project. I interviewed, hired, and managed 4 volunteers and launched live website sucessfully",
    tools: ["React", "Python", "Firebase", "Figma"],
    date: "Jan 2021 - Jun 2022",
  },
  {
    name: "Software Engineer",
    company: "Harvard In Tech",
    description:
      "I developed and maintained production, test, and beta website and web apps with 100+ daily views.",
    tools: ["HTML", "CSS", "JavaScript"],
    date: "May 2021 - May 2022",
  },
];

const Work = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl p-8">
        <p className="text-5xl sm:text-9xl pb-10">Work</p>
        <div className="container mx-auto mt-10 mb-10 p-4 sm:p-10 hidden sm:block">
          <Slider {...settings}>
            {work.map((job, index) => (
              <div
                key={index}
                className="rounded bg-gray-500 bg-opacity-20 shadow-lg h-[470px] p-[100px] flex flex-col justify-evenly"
              >
                <h3 className="text-4xl font-bold">{job.name}</h3>
                <h4 className="text-2xl italic">{job.company}</h4>
                <p className="mt-2">{job.date}</p>
                <p className="mt-4 text-xl">{job.description}</p>
                <div className="mt-2">
                  {job.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-2"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/*Mobile View*/}
        <div className="sm:hidden">
          {work.map((job, index) => (
            <div className="flex flex-col mb-8" key={index}>
              <span className="block text-sm text-center my-2">{job.date}</span>
              <div className="bg-gray-700 bg-opacity-40 p-5 shadow-lg transform transition duration-500 hover:scale-105 relative overflow-hidden rounded-lg">
                <div className="block text-left">
                  <h3 className="text-2xl font-bold">{job.name}</h3>
                  <h4 className="text-1xl font-bold">{job.company}</h4>
                  <p>{job.description}</p>
                  <div className="mt-2">
                    {job.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
