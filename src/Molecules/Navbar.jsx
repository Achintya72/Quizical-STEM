import { useNavigate } from "react-router-dom";
import { Button } from "../Atoms";
import styles from "./NavbarStyles.module.css";
import { useContext } from "react";
import UserContext from "../Backend";
import { auth } from "../Backend";
import { signOut } from "firebase/auth"
export default function Navbar() {
    const navigate = useNavigate();
    const { authUserDetails } = useContext(UserContext)
    const goTo = (link) => {
        console.log("Click")
        navigate(link);
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate("/login")
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.brand} onClick={() => goTo('/')}>Quizical</h2>
            {!authUserDetails ?
                <div className={styles.links}>
                    <Button variant="primary" onClick={() => goTo('/login')}><p>Login</p></Button>

                </div>
                :
                <div className={styles.links}>
                    <p onClick={() => goTo('/dashboard')}>Dashboard</p>
                    <Button variant="primary" onClick={() => logOut()}><p className="bold">Log Out</p></Button>
                </div>
            }
        </nav>
    )
}