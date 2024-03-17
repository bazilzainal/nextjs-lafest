import Image from "next/legacy/image";
import heroPic from "../public/images/poster.png";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <>
            <div className={styles.imgDiv}>
                {/* <div className={styles.herotext}>
                    <h1>LANGKAWI WRITERS' FESTIVAL</h1>
                    <span>1 - 4 September 2022</span>
                </div> */}
                <Image
                    className={styles.heroImg}
                    src={heroPic}
                    alt="Langkawi Writers' Festival"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </>
    );
}
