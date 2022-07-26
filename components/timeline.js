import styles from "./timeline.module.scss";
import { Image } from "react-datocms";
import { isSameDay, format } from "date-fns";
import Link from "next/link";
import TimelineDay from "./timelineDay";

export default function Timeline({ allEventsData }) {
    return (
        <div className={styles.all}>
            <h1>Programme</h1>
            <section>
                <div className={styles.gridWrapper}>
                    {/* First day */}
                    <h2>1 September 2022</h2>
                    {allEventsData.map((event) => {
                        return <TimelineDay eventData={event} day={new Date(2022, 8, 1)} key={event.slug} />;
                    })}
                </div>
                <div className={styles.gridWrapper}>
                    {/* Second day */}
                    <h2>2 September 2022</h2>
                    {allEventsData.map((event) => {
                        return <TimelineDay eventData={event} day={new Date(2022, 8, 2)} key={event.slug} />;
                    })}
                </div>
                <div className={styles.gridWrapper}>
                    {/* Second day */}
                    <h2>3 September 2022</h2>
                    {allEventsData.map((event) => {
                        return <TimelineDay eventData={event} day={new Date(2022, 8, 3)} key={event.slug} />;
                    })}
                </div>
                <div className={styles.gridWrapper}>
                    {/* Second day */}
                    <h2>4 September 2022</h2>
                    {allEventsData.map((event) => {
                        return <TimelineDay eventData={event} day={new Date(2022, 8, 4)} key={event.slug} />;
                    })}
                </div>
            </section>
        </div>
    );
}
