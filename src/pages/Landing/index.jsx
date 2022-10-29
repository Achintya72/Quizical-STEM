import { Navbar } from "../../Molecules";
import LandingImg from "../../images/LandingImg.png";
import styles from "./Landing.module.css";
export default function Landing() {
    return (
        <div className={`page ${styles.landing}`}>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.heading}>
                    <h3>Welcome To</h3>
                    <span className={`bold ${styles.quizical}`}>Quizical</span>
                </div>
                <img src={LandingImg} />
            </div >
        </div >
    )
}