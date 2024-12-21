"use client"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Information from "./components/Information";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import MySkill from "./components/MySkill";
import Navbar from "./components/Navbar";
import FadeInY from "./components/motion/FadeInY";

export default function Home() {
    return (
        <div className="font-[poppins] w-full">
            <Navbar />
            <Information />
            <section id="about" className="w-full">
                <FadeInY startInView={-50} className="w-full my-8 md:my-20">
                    <MaxWidthWrapper className="flex flex-col items-center justify-center w-full px-8 lg:px-60 gap-2 md:gap-4">
                        <h1 className="text-[#00FF80] font-semibold text-3xl md:text-5xl text-center"> About Me </h1>
                        <p className="text-white font-light text-justify text-sm md:text-lg"> I am a passionate Game Developer and Backend Programmer with a strong dedication to crafting innovative, engaging, and seamless experiences. With expertise in both game design and backend architecture, I specialize in creating immersive games that captivate players and robust backend systems that ensure performance, scalability, and reliability. </p>
                        <p className="text-white font-light text-justify text-sm md:text-lg"> In my role as a Game Developer, I thrive on bringing creative ideas to life, transforming concepts into fun and interactive gaming experiences. I have a deep understanding of mechanics, storytelling, and player engagement, allowing me to design games that are both enjoyable and impactful. </p>
                    </MaxWidthWrapper>
                </FadeInY>
            </section>
            <Carousel />
            <MySkill />
            <Footer />
        </div>
    );
}
