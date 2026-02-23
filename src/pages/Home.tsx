
import { Contact } from "../components/sections/contact/Contact";
import { Hero } from "../components/sections/hero/Hero";
import { Process } from "../components/sections/process/Process";
import { Services } from "../components/sections/services/Services";
import { Technologies } from "../components/sections/technologies/Technologies";
import { WhyUs } from "../components/sections/whyus/WhyUs";
import { Section } from "../components/ui/section/Section";




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
