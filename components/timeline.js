import styles from "./timeline.module.scss";
import Date from "./date";

export default function Timeline({ allEventsData }) {
    return (
        <div className={styles.all}>
            <h1>Programme</h1>
            <section>
                <div className={styles.gridWrapper}>
                    <h2>1 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            event.date == "2022-09-01" && (
                                <article key={event.id} className={styles.event}>
                                    <div className={styles.event__content}>
                                        <h3>{event.title}</h3>
                                        <h4>
                                            {event.startTime} - {event.endTime}
                                        </h4>
                                        <p>{event.description}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                
                <div className={styles.gridWrapper}>
                    <h2>2 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            event.date == "2022-09-02" && (
                                <article key={event.id} className={styles.event}>
                                    <div className={styles.event__content}>
                                        <h3>{event.title}</h3>
                                        <h4>
                                            {event.startTime} - {event.endTime}
                                        </h4>
                                        <p>{event.description}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                
                <div className={styles.gridWrapper}>
                    <h2>3 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            event.date == "2022-09-03" && (
                                <article key={event.id} className={styles.event}>
                                    <div className={styles.event__content}>
                                        <h3>{event.title}</h3>
                                        <h4>
                                            {event.startTime} - {event.endTime}
                                        </h4>
                                        <p>{event.description}</p>
                                    </div>
                                </article>
                            )
                        );
                    })}
                </div>
                
                <div className={styles.gridWrapper}>
                    <h2>4 September 2022</h2>
                    {allEventsData.map((event) => {
                        return (
                            event.date == "2022-09-04" && (
                                <article key={event.id} className={styles.event}>
                                    <div className={styles.event__content}>
                                        <h3>{event.title}</h3>
                                        <h4>
                                            {event.startTime} - {event.endTime}
                                        </h4>
                                        <p>{event.description}</p>
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
