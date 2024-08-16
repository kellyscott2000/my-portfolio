"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating responsive, user-friendly websites that are both visually appealing and highly functional. Leveraging modern frameworks and best practices, I deliver robust solutions tailored to meet the unique needs of each project.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design intuitive and visually engaging user interfaces that enhance the user experience. By focusing on user-centered design principles, I create seamless and interactive designs that align with both user needs and business goals, ensuring an optimal experience across all devices.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "I develop high-performance mobile applications tailored for both iOS and Android platforms. By utilizing the latest technologies and frameworks, I create apps that are fast, responsive, and provide a seamless user experience, ensuring they meet the needs of both users and businesses.",
    href: "",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "I create distinctive and memorable logos that capture the essence of your brand. Through a thoughtful design process, I ensure that each logo not only stands out but also resonates with your target audience, helping to establish a strong visual identity for your business.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-amber-400 transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-400 transition-all duration-500">{service.title}</h2>
                <p className="text-white/60 text-justify">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
