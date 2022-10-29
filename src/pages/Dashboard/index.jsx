import { Navbar } from "../../Molecules";
import styles from "./DashboardStyles.module.css";
import UserContext from "../../Backend";
import { useContext } from "react";
import { Card } from "../../Organisms";
import EditIcon from "../../images/EditIcon.svg";
import AddEditorsIcon from "../../images/AddEditorsIcon.svg";
import ShareIcon from "../../images/ShareIcon.svg";
export default function Dashboard() {
    const { userDetails, loading } = useContext(UserContext);
    return (
        <div className="page">
            <Navbar />
            <div className={styles.content}>
                {loading ?
                    <h1>Loading ...</h1>
                    :
                    <DashboardRoot userDetails={userDetails} />
                }
            </div>
        </div>
    )
}

const DashboardRoot = ({ userDetails }) => {
    const renderCurrentSets = ((userDetails?.learningSets) ?? []).map((set) => (
        <Card transparent={false} className={styles.set}>
            <h2 className="bold">{set.name}</h2>
            <div className={styles.setDetails}>
                <p className="bold">{set.progress}%</p>
                <div className={styles.actions}>
                    <img src={ShareIcon} />
                </div>
            </div>
        </Card>
    ));

    const renderEditingSets = ((userDetails?.editingSets) ?? []).map((set) => (
        <Card transparent={false} className={styles.set}>
            <h2 className="bold">{set.name}</h2>
            <div className={styles.setDetails}>
                <p className="bold">{set?.progress ?? 0}%</p>
                <div className={styles.actions}>
                    <img src={EditIcon} />
                    <img src={AddEditorsIcon} />
                    <img src={ShareIcon} />
                </div>
            </div>
        </Card>
    ))
    return (
        <>
            <p>{userDetails?.email}</p>
            <div className={styles.allSets}>
                <div className={styles.setType}>
                    <h1>Learning:</h1>
                    <div className={styles.setsForType}>
                        {renderCurrentSets}
                    </div>
                </div>
                <div className={styles.setType}>
                    <h1>Editing:</h1>
                    <div className={styles.setsForType}>
                        {renderEditingSets}
                    </div>
                </div>
            </div>

        </>
    )
}