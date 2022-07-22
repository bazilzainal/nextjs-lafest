import styles from "./timeline.module.scss"

export default function Timeline() {
    return (
        <div className={styles.all}>
            <h1>Events</h1>
            <section>
                <h2>1 September</h2>
                <div className={styles.gridWrapper}>
                    <article>
                        <h3>9:00 AM</h3>
                        <p>Life finds a way. You know what? It is beets. </p>
                    </article>
                    <article>
                        <h3>10:00 AM</h3>
                        <p>I've crashed into a beet truck </p>
                    </article>
                    <article>
                        <h3>12:30 AM</h3>
                        <p>I was part of something special. </p>
                    </article>
                    <article>
                        <h3>13:30 AM</h3>
                        <p>
                            Yeah, but your scientists were so preoccupied with whether or not they could, they didn't
                            stop to think if they should.{" "}
                        </p>
                        {/* <img
                            src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                            alt="Black and white photo of a lake"
                        /> */}
                    </article>
                    <article>
                        <h3>14:30 AM</h3>
                        <p>Just my luck, no ice. God help us, we're in the hands of engineers. </p>
                    </article>
                    <article>
                        <h3>15:30 AM</h3>
                        <p>I gave it a cold? I gave it a virus. A computer virus. </p>
                    </article>
                    <article>
                        <h3>16:30 AM</h3>
                        <p>
                            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                            creates Dinosaurs.{" "}
                        </p>
                    </article>
                    <article>
                        <h3>17:30 AM</h3>
                        <p>What do they got in there? King Kong? </p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                            alt="Black and White Eiffel Tower"
                        />
                    </article>
                </div>
            </section>
            <section>
                <h2>3 Jan</h2>
                <div className={styles.gridWrapper}>
                    <article>
                        <h3>9:00 AM</h3>
                        <p>Life finds a way. You know what? It is beets. </p>
                    </article>
                    <article>
                        <h3>10:00 AM</h3>
                        <p>I've crashed into a beet truck </p>
                    </article>
                    <article>
                        <h3>12:30 AM</h3>
                        <p>I was part of something special. </p>
                    </article>
                    <article>
                        <h3>13:30 AM</h3>
                        <p>
                            Yeah, but your scientists were so preoccupied with whether or not they could, they didn't
                            stop to think if they should.{" "}
                        </p>
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                            alt="Black and White Eiffel Tower"
                        /> */}
                    </article>
                    <article>
                        <h3>14:30 AM</h3>
                        <p>Just my luck, no ice. God help us, we're in the hands of engineers. </p>
                    </article>
                    <article>
                        <h3>15:30 AM</h3>
                        <p>I gave it a cold? I gave it a virus. A computer virus. </p>
                    </article>
                    <article>
                        <h3>16:30 AM</h3>
                        <p>
                            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                            creates Dinosaurs.{" "}
                        </p>
                    </article>
                    <article>
                        <h3>17:30 AM</h3>
                        <p>What do they got in there? King Kong? </p>
                        <img
                            src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                            alt="Black and white Mountian view"
                        />
                    </article>
                </div>
            </section>
        </div>
    );
}
