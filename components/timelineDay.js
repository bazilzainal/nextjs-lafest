import styles from "./timeline.module.scss";
import { Image } from "react-datocms";
import { isSameDay, format } from "date-fns";
import Link from "next/link";

export default function TimelineDay({ eventData, day}) {

    return isSameDay(new Date(eventData.startDate), day) && (
        <article className={styles.event}>
            <div className={styles.eventImage}>
                <Image data={eventData.coverImage.responsiveImage}></Image>
            </div>
            <div className={styles.eventContent}>
                <h4>{format(new Date(eventData.startDate), "HH:mmaa")} - {format(new Date(eventData.endDate), "HH:mmaa")}</h4>
                <h3>{eventData.title}</h3>
                <p>{eventData.excerpt}</p>
                {eventData.published && (
                    <Link href={`/events/${eventData.slug}`}>
                        Event Details
                    </Link>
                )}
            </div>
        </article>
    );
}