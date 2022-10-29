import styles from "./Card.module.css";

export default function Card({ children, transparent, className }) {
    return (
        <div className={`${className} ${styles.card} ${transparent ? styles.clear : styles.whiteBackground}`}>
            {children}
        </div>
    )
}