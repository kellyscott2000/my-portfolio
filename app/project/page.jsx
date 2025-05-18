"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full stack",
    title: "Pharmacy delivery web application",
    description:
      "Developed a pharmacy delivery web app for medication orders, prescription uploads, and delivery. Led UI/UX design, used Next.js for frontend, integrated with backend systems, and ensured secure payments. Refined features based on user feedback and delivered on time.",
    stack: [{ name: "Next.js" }, { name: "MongoDb" }],
    image: "/assets/mobile_app2.jpg",
    github: "",
  },
  {
    num: "02",
    category: "UI/UX",
    title: "Pharmacy delivery web application",
    description:
      "Developed a pharmacy delivery web app for medication orders, prescription uploads, and delivery. Led UI/UX design, used Next.js for frontend, integrated with backend systems, and ensured secure payments. Refined features based on user feedback and delivered on time.",
    stack: [{ name: "Figma" }],
    image: "/assets/mobile_app2.jpg",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "React Redux CRUD Application",
    description:
      "Developed a CRUD application using vite, react and redux. This project is just show the create, read, update, and delete operations using react redux.",
    stack: [{ name: "React.js" }, { name: "Vite" }, { name: "Redux" }],
    image: "/assets/crud.png",
    github: "https://github.com/kellyscott2000/frontend-react-redux-crud-app",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Book record keeping",
    description:
      "Developed a CRUD application for a book store using react.js. The web application is designed to allow the taking if records of books.",
    stack: [{ name: "React.js" }],
    image: "/assets/book.png",
    github: "https://github.com/kellyscott2000/bookstore-react-frontend-project",
  },
{
    num: "05",
    category: "Frontend",
    title: "E-commerce Admin Panel",
    description:
      "Designed the frontend for an e-commerce admin panel.",
    stack: [{ name: "React.js" }],
    image: "/assets/e-commerce.png",
    github: "https://github.com/kellyscott2000/e-commerce-admin-panel",
  },

 
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get currrent slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] xl:pb-20 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-400 transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60 text-justify">
                {project.description}
              </p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-amber-400">
                      {item.name}
                      {/* Adding comma after each stack name except the last name */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div>
                <div className="flex items-center gap-4">
                  {/* live project (not available now so using github) */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-amber-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Project Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* live project ends */}

                  {/* github project */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-amber-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Git Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project ends */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              className="xl:h-[520px] mb-12"
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-amber-400 hover:bg-amber-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
