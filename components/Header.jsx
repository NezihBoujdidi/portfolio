import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOgo / myPic */}
            <Link href="/">
                <h1>
                    Nezih<span className="text-accent">.</span>
                </h1>
            </Link>


            {/* desktop Nav  and get resume button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <button>Get CV</button>
                </Link>
            </div>

            {/* mobile nav */}

            <div className="xl:hidden">mobile nav</div>
        </div>
    </header>
  );
};

export default Header;