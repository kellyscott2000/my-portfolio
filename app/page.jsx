/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// imported components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-amber-400">Samuel Dablah</span>
            </h1>
            <p className="w-full xl:max-w-[500px] mb-9 text-white/80 text-justify">
              Results-driven Computer Science graduate with expertise in UI/UX
              design and web development. Proven success in creating impactful
              digital solutions that boost user engagement. Skilled in design
              tools, leading projects, user research, and prototyping. Strong
              communicator with a passion for innovation and continuous
              improvement.
            </p>
            {/* social media handles and CV starts */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/Eyram.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-400 rounded-full flex justify-center items-center text-amber-400 text-base hover:bg-amber-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
            {/* social media handles and CV ends */}
          </div>
          <div className="order-1 xl:order-none mb:8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
