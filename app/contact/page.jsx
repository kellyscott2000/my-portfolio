"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { icons } from "lucide-react";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+233559640397",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "samueleyramkay@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Accra, Ghana.",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54px] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c]  rounded-xl">
              <h3 className="text-4xl text-amber-400">Let's work together</h3>
              <p className="text-white/60 text-justify">
                I'm always excited to collaborate on new projects, whether
                you're looking to enhance your web presence or design an
                intuitive user experience. Feel free to reach out—I'd love to
                discuss how we can bring your vision to life
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end  order-1 xl:order-none mb-8 xl:mb-0">
            Info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
