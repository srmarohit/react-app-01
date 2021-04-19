import NavBar from "../components/navbar";
import TopBar from "../components/topbar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomeObjOne, HomeObjTwo, HomeObjThree } from "../components/InfoSection/data";
import Services from "../components/Services";
import Footer from "../components/Footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <TopBar isOpen={isOpen} toggle={toggle} />
            <NavBar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <Services />
            <InfoSection {...HomeObjThree} />
            <Footer/>
        </>
        )
}

export default Home;