import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Hero from "../components/hero";
import Section from "../components/section";
import profilePicture from "../public/images/garden.jpg";

export default function Home() {
    return (
        <>
            <Hero />
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Section size="Sm">
                    <div className={utilStyles.intro}>
                        <h1 className={utilStyles.introtext}>next stop, for those who read</h1>
                    </div>
                </Section>
                <Section size="Sm">
                    <p>
                        Langkawi Writers' Festival brings together the best writers from Malaysia and the world to
                        create a unique experience for readers and writers alike. Share conversations, write stories,
                        and explore your ideas with the world.
                    </p>
                </Section>
                <Section size="Sm">
                    <h4>More to come soon, check back later!</h4>
                </Section>

                <Section size="Sm">
                    <Image width={250} height={250} src={profilePicture} className={utilStyles.profilePicture} />
                </Section>
            </Layout>
        </>
    );
}
