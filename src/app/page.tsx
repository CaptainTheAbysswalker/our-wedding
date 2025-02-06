import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles['language-selector']}>
        <button >Eng</button>
        <button >Ру</button>
    </div>

    <section className={styles.hero}>
        <div className={styles['hero-content']}>
            <div className={styles.overlay}>
                <h1 id="names">Alexandr & Viktoria</h1>
                <p id="wedding-date">Wedding Date: 13.09.2025</p>
                <p id="quote" className={styles.quote}>Together forever</p>
            </div>
        </div>
    </section>

    <section className={styles['form-section']}>
        <h2 id="form-title">Help us make your experience even better!</h2>
        <form className={styles['wedding-form']}>
            <label id="transport-label">Do you need transport to the venue?</label>
            <select id="transport" name="transport">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label id="alcohol-label">Do you have any alcohol preferences?</label>
            <input type="text" id="alcohol" name="alcohol" placeholder="e.g. Red wine, beer" />

            <label id="diet-label">Do you have any dietary restrictions?</label>
            <input type="text" id="diet" name="diet" placeholder="e.g. Vegetarian, gluten-free" />

            <label id="attendance-label">Will you attend the event?</label>
            <select id="attendance" name="attendance">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <button type="submit" className={styles['submit-btn']} id="submit-btn">Submit</button>
        </form>
    </section>

    <section className={styles['schedule-section']}>
        <h2 id="schedule-title">Wedding Schedule</h2>
        <ul className={styles['schedule-list']}>
            <li><strong>10:00 AM</strong> - Ceremony begins at [Venue Name]</li>
            <li><strong>12:00 PM</strong> - Cocktail hour</li>
            <li><strong>1:00 PM</strong> - Wedding reception and dinner</li>
            <li><strong>3:00 PM</strong> - Dancing and celebration</li>
            <li><strong>5:00 PM</strong> - Send-off and final goodbyes</li>
        </ul>
    </section>

    <section className={styles['invitation-text']}>
        <h2 id="invitation-title">Our Invitation</h2>
        <p id="invitation-text">{`Dear guests, we are excited to celebrate our special day with you. Your presence means the world to us, and we can't wait to share this memorable moment with you.`}</p>
    </section>

    <section className={styles['map-section']}>
        <h2 id="map-title">Location</h2>
        <div id="map"></div>
    </section>

    <section className={styles['buttons']}>
        <a href="#" className={styles['calendar-btn']} id="calendar-btn">Add to Calendar</a>
        <a href="#" className={styles['accept-btn']} id="accept-btn">Accept the Invitation</a>
    </section>

    <footer className={styles['footer']}>
        <p id="footer-text">&copy; 2025 Wedding of Alexandr & Viktoria. All rights reserved.</p>
    </footer>
  </main>
  );
}
