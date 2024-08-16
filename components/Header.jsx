import Link from "next/link";
import { Button } from "./ui/button";

// imported components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo starts */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Samuel<span className="text-amber-400">.</span>
          </h1>
        </Link>
        {/* logo ends */}

        {/* Desktop nav starts */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Desktop nav ends */}

        {/* Mobile nav starts */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
        {/* Mobile nav ends */}
      </div>
    </header>
  );
};

export default Header;
