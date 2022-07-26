import styles from "./timeline.module.scss";
import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";
import { isSameDay, format } from "date-fns";

export default function Timeline({ allEventsData }) {
    return (
        <div className={styles.all}>
            <h1>Programme</h1>
            <section>
                <div className={styles.gridWrapper}>

                    {/* First day */}
                    <h2>1 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            isSameDay(new Date(event.startDate), new Date(2022, 8, 1)) && (
                                <article key={event.slug} className={styles.event}>
                                    <div className={styles.eventImage}>
                                        <Image data={event.coverImage.responsiveImage}></Image>
                                    </div>
                                    <div className={styles.eventContent}>
                                        <h4>{format(new Date(event.startDate), "HH:mmaa")} - {format(new Date(event.endDate), "HH:mmaa")}</h4>
                                        <h3>{event.title}</h3>
                                        <p>{event.excerpt}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                <div className={styles.gridWrapper}>

                    {/* Second day */}
                    <h2>2 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            isSameDay(new Date(event.startDate), new Date(2022, 8, 2)) && (
                                <article key={event.slug} className={styles.event}>
                                    <div className={styles.eventImage}>
                                        <Image data={event.coverImage.responsiveImage}></Image>
                                    </div>
                                    <div className={styles.eventContent}>
                                        <h4>{format(new Date(event.startDate), "hh:mmaa")} - {format(new Date(event.endDate), "HH:mmaa")}</h4>
                                        <h3>{event.title}</h3>
                                        <p>{event.excerpt}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                <div className={styles.gridWrapper}>

                    {/* Second day */}
                    <h2>3 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            isSameDay(new Date(event.startDate), new Date(2022, 8, 3)) && (
                                <article key={event.slug} className={styles.event}>
                                    <div className={styles.eventImage}>
                                        <Image data={event.coverImage.responsiveImage}></Image>
                                    </div>
                                    <div className={styles.eventContent}>
                                        <h4>{format(new Date(event.startDate), "hh:mmaa")} - {format(new Date(event.endDate), "HH:mmaa")}</h4>
                                        <h3>{event.title}</h3>
                                        <p>{event.excerpt}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                <div className={styles.gridWrapper}>

                    {/* Second day */}
                    <h2>4 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            isSameDay(new Date(event.startDate), new Date(2022, 8, 4)) && (
                                <article key={event.slug} className={styles.event}>
                                    <div className={styles.eventImage}>
                                        <Image data={event.coverImage.responsiveImage}></Image>
                                    </div>
                                    <div className={styles.eventContent}>
                                        <h4>{format(new Date(event.startDate), "hh:mmaa")} - {format(new Date(event.endDate), "HH:mmaa")}</h4>
                                        <h3>{event.title}</h3>
                                        <p>{event.excerpt}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
