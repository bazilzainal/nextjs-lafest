import Image from "next/image";
import heroPic from "../public/images/birds.png";

export default function Hero() {
    return (
        <>
            <div className="img-div">
                <div className="herotext">
                    <h1>LANGKAWI WRITERS' FESTIVAL</h1>
                    <span>1 - 4 September 2022</span>
                </div>
                <Image
                    className="hero"
                    src={heroPic}
                    alt="Langkawi Writers' Festival"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="0 20%"
                    // priority
                    style={{
                        opacity: 0.7,
                    }}
                />
            </div>
            <style jsx>{`
                .herotext {
                    position: relative;
                    z-index: 1;
                    color: #fff;
                    top: 50%;
                    left: 10%;
                    font-family: "Sifonn", sans-serif;
                }

                .herotext h1 {
                    font-size: 3rem;
                    font-weight: bold;
                    margin-bottom: 0;
                }

                .herotext span {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 0;
                }

                .img-div {
                    position: relative;
                    width: 100%;
                    height: 70vh;
                    background-color: #767676;
                    background: -webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)),
                        url("https://bit.ly/2rlzaXi");
                    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)),
                        url("https://bit.ly/2rlzaXi"); /* The least supported option. */
                }
            `}</style>
        </>
    );
}
