import { Button } from "../../Atoms"
import { Navbar } from "../../Molecules"
import { Card } from "../../Organisms"
import styles from "./Login.module.css";
import { auth } from "../../Backend";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
export default function Login() {
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            let response = await signInWithPopup(auth, provider);
            navigate('/dashboard');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={` page ${styles.login}`}>
            <Navbar />
            <div className={styles.loginForm}>
                <Card transparent={false} className={styles.loginCard}>
                    <h1>Login</h1>
                    <Button onClick={handleClick} variant="primary" background="light"><p>Sign In With Google</p></Button>
                </Card>
            </div>
        </div>
    )
}