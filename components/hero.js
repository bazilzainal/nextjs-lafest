import Image from "next/image";
import heroPic from "../public/images/jesse-vermeulen-LbjcsNneKCY-unsplash.jpg";

export default function Hero() {
    return (
        <div>
            <Image src={heroPic} alt="Langkawi Writer's Festival" layout="fill" objectFit="cover" priority/>
            <style jsx>{`
                div {
                    position: relative;
                    width: 100%;
                    height: 70vh;
                }
            `}</style>
            ;
        </div>
    );
}
