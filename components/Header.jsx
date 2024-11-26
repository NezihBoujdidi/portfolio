import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOgo / myPic */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Nezih<span className="text-accent">.</span>
                </h1>
            </Link>


            {/* desktop Nav  and get resume button*/}
            <div className="hidden xl:flex items-center gap-10">
                <Nav />
                <Link href="/contact">
                    <Button>Let&apos;s Connect</Button>
                </Link>
            </div>

            {/* mobile nav */}

            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;