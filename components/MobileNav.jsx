"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "project",
    path: "/project",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-amber-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo starts */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-2xl font-semibold">
              Samuel<span className="text-amber-400">.</span>
            </h1>
          </Link>
        </div>
        {/* logo ends */}
        {/* nav starts */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-amber-400 border-b-2 border-amber-400"
                } text-xl capitalize hover:text-amber-400 transition-all`}
                
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* nav ends */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
