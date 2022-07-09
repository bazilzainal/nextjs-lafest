import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import heroPic from "../public/images/jesse-vermeulen-LbjcsNneKCY-unsplash.jpg";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                <Image src={heroPic} alt="Langkawi Writer's Festival" className={utilStyles.hero}/>
            </div>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <Link href="./posts/first-post">
                <a>Test</a>
            </Link>
        </Layout>
    );
}
