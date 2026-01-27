
import { Contact } from "../components/sections/contact/Contact";
import { Hero } from "../components/sections/hero";
import { Process } from "../components/sections/process";
import { Services } from "../components/sections/services";
import { Technologies } from "../components/sections/technologies/Technologies";
import { WhyUs } from "../components/sections/whyus/WhyUs";
import { Section } from "../components/ui/section";



export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Section variant="soft">
                <WhyUs />
                <Technologies />
            </Section>
            <Process />
            <Contact/>
        </>
    );
};
