import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const projects = [
  {
    name: "Hack The Future",
    description:
      "I'm a team lead for Hack The Future, a student organization at Purdue University that develops software for local nonprofits. My team works with Hanna Community Center to develop their enrollment system.",
    tools: ["React", "MongoDB"],
    link: "http://linktoprojectone.com",
    date: "Aug 2023 - Present",
  },
  {
    name: "Boiler Bites",
    description:
      "A mobile application for Purdue boilermakers to find food around campus using crowdsourced ratings.",
    tools: ["React", "Node.js", "Express", "AWS RDS", "Ionic"],
    link: "http://linktoprojectone.com",
    date: "Aug 2023 - Present",
  },
  {
    name: "Subway Surfers Chrome Extension",
    description:
      "A fun project I made to learn about Chrome extensions. It plays a continuous loops of Subway Surfers on the side of your browser.",
    tools: ["JavaScript", "HTML"],
    link: "http://linktoprojectone.com",
    date: "July 2023",
  },
  {
    name: "Soundscape",
    description:
      "A mobile application that translates user emotions to a Spotify playlist. Winner of Best Use of Serverless Database at Purdue's Biggest Hackathon, BoilerMake X. ",
    tools: ["React Native", "Python", "Flask", "PostgreSQL", "CockroachDB"],
    link: "https://devpost.com/software/soundscape-aw09nf",
    date: "Jan 2023",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl">
        <p className="text-5xl sm:text-9xl pb-10">Projects</p>
        <div className="w-full max-w-4xl p-8">
          <div className="hidden sm:block">
            <Timeline position="alternate">
              {projects.map((project, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    {project.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col mb-8" key={index}>
                      <div className="bg-gray-700 bg-opacity-40 p-5 shadow-lg transform transition duration-500 hover:scale-105 relative overflow-hidden rounded-lg">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h3 className="text-2xl font-bold">{project.name}</h3>
                          <p className="text-lg">{project.description}</p>
                          <div className="mt-2">
                            {project.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-2"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </a>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          <div className="sm:hidden">
            {projects.map((project, index) => (
              <div className="flex flex-col mb-8" key={index}>
                <span className="block text-sm text-center my-2">
                  {project.date}
                </span>
                <div className="bg-gray-700 bg-opacity-40 p-5 shadow-lg transform transition duration-500 hover:scale-105 relative overflow-hidden rounded-lg">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-lg">{project.description}</p>
                    <div className="mt-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-2"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
