import Image from "next/image";
import heroPic from "../public/images/poster.png";
import styles from "./hero.module.css";

export default function Hero() {
    return <>
        <div className={styles.imgDiv}>
            {/* <div className={styles.herotext}>
                <h1>LANGKAWI WRITERS' FESTIVAL</h1>
                <span>1 - 4 September 2022</span>
            </div> */}
            <Image
                className={styles.heroImg}
                src={heroPic}
                alt="Langkawi Writers' Festival"
                priority
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover"
                }} />
        </div>
    </>;
}
