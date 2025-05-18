"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaPhp,
  FaMicrosoft,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a results-driven Computer Science graduate with a strong focus on UI/UX design and web development. My background includes a proven track record of creating impactful digital solutions that significantly enhance user engagement. I excel at designing intuitive and visually compelling user interfaces while building responsive, functional websites using modern frameworks and best practices. In UI/UX design, I lead projects from conception through to completion, conducting user research and developing prototypes that meet both user needs and business goals. My approach combines creativity with a keen understanding of user behavior to craft seamless experiences. On the web development front, I specialize in building robust solutions that offer a smooth, responsive user experience across various devices. My work is driven by a passion for innovation and a commitment to continuous improvement, always looking for new ways to push the boundaries of what’s possible. As a strong communicator and collaborative team player, I thrive in environments where creative problem-solving and forward-thinking are encouraged. My goal is to deliver exceptional results through a blend of technical skill and creative insight.",
  info: [
    {
      filedName: "Name",
      fieldValue: "Samuel Dablah",
    },
    {
      filedName: "Phone",
      fieldValue: "+233559640397",
    },
    {
      filedName: "Github",
      fieldValue: "kellyscott2000",
    },
    {
      filedName: "Email",
      fieldValue: "samueleyramkay@gmail.com",
    },
    {
      filedName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      filedName: "Languages",
      fieldValue: "English, Twi, Ewe",
    },
    {
      filedName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "/assets/badge.svg",
  title: "My Expereience",
  description:
    "Experienced professional with a diverse background in finance, quality assurance, and design. As a Credit Officer, I honed my analytical and problem-solving skills. My roles as a QA Engineer and Graphic Design Intern further enhanced my technical and creative abilities, equipping me with a multidisciplinary approach to deliver effective solutions and drive project success.",
  items: [
    {
      company: "Celltel Networks Limited",
      position: "IT Support Assistant",
      duration: "2024",
    },
    {
      company: "Pan-African Savings and Loans-ECOBANK",
      position: "Credit Officer",
      duration: "2023 - 2024",
    },
    {
      company: "Thelsam Financial Services",
      position: "IT Support Specialist",
      duration: "2020 - 2022",
    },
    {
      company: "Safr Solutions limited. ",
      position: "QA engineer/Graphic designer intern",
      duration: "05/2022 - 08/22",
    },
  ],
};

const education = {
  icon: "/assets/badge.svg",
  title: "My Education",
  description:
    "Bachelor of Science in Computer Science, where I developed a solid foundation in programming, software development, and system analysis. My coursework and projects equipped me with critical problem-solving skills and hands-on experience in various technologies and methodologies.",
  items: [
    {
      institution: "Catholic University of Ghana",
      degree: "B.sc Computer Science",
      duration: "2019 - 2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in web development, UI/UX design, and quality assurance. Experienced with modern frameworks, design tools, and best practices to create responsive, user-centric solutions. Adept at problem-solving, project management, and delivering high-quality results across diverse technical and creative domains.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft Office suites",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaReact />,
      name: "React-native",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiAndroidstudio />,
      name: "Android Studio",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[68px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience starts */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Experience ends */}

            {/* Education starts */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education ends */}

            {/* Skills starts */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold"> {skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {" "}
                    {skills.description}{" "}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-amber-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Skills ends */}

            {/* About me starts */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left xl:pb-20"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-justify max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.filedName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About me ends */}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
