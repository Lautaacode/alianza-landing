import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { WhyUs } from "../components/sections/WhyUs";
import { Process } from "../components/sections/Process";
import { Technologies } from "../components/sections/Technologies";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";


export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <WhyUs />
            <Process />
            <Technologies />
            <Testimonials />
            <Contact />
        </>
    );
};
