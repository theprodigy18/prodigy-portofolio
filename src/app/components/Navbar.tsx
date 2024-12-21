import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import FadeInY from "./motion/FadeInY"

function Navbar() {
    return (
        <FadeInY startInView={-20} className="sticky inset-x-0 top-0 z-50 bg-[#282727] md:bg-[#141313]/75 backdrop-blur-lg">
            <MaxWidthWrapper className="flex items-center justify-between py-4 px-8 lg:px-56 md:px-16">
                <div className="flex items-center justify-center">
                    <Link href="/" className="font-bold text-white transition-all text-xl"> The <span className="text-[#00FF80]"> Prodigy </span> </Link>
                </div>
                <div className="hidden md:flex items-center justify-center md:gap-8 lg:gap-12">
                    <Link href="/" className="text-white hover:text-[#00FF80] transition-all duration-300 ease-in-out"> Home </Link>
                    <Link href="/#about" className="text-white hover:text-[#00FF80] transition-all duration-300 ease-in-out"> About </Link>
                    <Link href="/#project" className="text-white hover:text-[#00FF80] transition-all duration-300 ease-in-out"> Project </Link>
                    <Link href="/#contact" className="text-white hover:text-[#00FF80] transition-all duration-300 ease-in-out"> Contact </Link>
                </div>
            </MaxWidthWrapper>
        </FadeInY>
    )
}


export default Navbar