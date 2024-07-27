import styles from "./Card.module.css";

function Card() {
    return (
        <div className={styles.card}>
            <img
                src="https://initiate.alphacoders.com/images/135/cropped-1280-1280-1352928.png?3268"
                alt=""
                className={styles.cardImg}
            />
            <h2 className={styles.cardTitle}>Card Title</h2>
            <p className={styles.cardText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum blanditiis ab nobis eius aspernatur, aliquid a quasi
                suscipit deserunt quam dignissimos, id quos quisquam vel
                reprehenderit corrupti. Sequi, quis!
            </p>
        </div>
    );
}
export default Card;
