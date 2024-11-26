"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectsSliderBtns from "@/components/ProjectsSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack Students Attendance Management",
    title: "project 01",
    description: "This app provides a seamless way to manage and monitor attendance for both instructors and students.",
    stack: [{name: "Typescript"}, {name: "Next.js"}, {name: "Express.js"} ],
    image: '/assets/add abs.png',
    live:'https://students-attendance-management.netlify.app',
    hint:'Use nezih / nezih to login or create a user!',
    github:"https://github.com/NezihBoujdidi/StudentsAttendanceManagement",
  },
  {
    num: "02",
    category: "FullStack Debt Recovery Management System",
    title: "project 02",
    description: " In Progress Project. A comprehensive solution for managing client invoices, payments, and dunning strategies with automated reminders and detailed tracking.",
    stack: [{name: "Typescript"}, {name: "Angular"}, {name: "Spring Boot"}, {name: "MySql"} ],
    image: '/assets/appPic.png',
    live:'',
    hint:'',
    github:"https://github.com/NezihBoujdidi/AppRecouvrement",
  },
  {
    num: "03",
    category: "Medical Assistance",
    title: "project 03",
    description: "Medical Assistance App: A tool for caregivers to manage elderly patients.",
    stack: [{name: "Typescript"}, {name: "Angular"}, {name: "Spring Boot"}, {name: "MySql"} ],
    image: '/assets/medicalAssist.png',
    live:'',
    hint:'',
    github:"https://github.com/NezihBoujdidi/MedicalAssistance",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project based on current slide index
    setProject(projects[currentIndex]);
  }
  return (<motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* proj category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            {/* proj description */}
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
            <div className="flex flex-col items-start gap-4">
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && project.live !== '' && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <p>{project.hint}</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="relative xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain max-w-full max-h-full"
                        alt="project thumbnail"
                        
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* slider buttons */}
            <ProjectsSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                        xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover
                        text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
          )
};

export default Projects;