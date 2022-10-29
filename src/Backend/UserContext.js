import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseHooks"
import { doc, onSnapshot, setDoc } from "firebase/firestore";
const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const [authUserDetails, setAuthUserDetails] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setAuthUserDetails(user);
            }
            else {
                setAuthUserDetails(null);
            }
        })
        return listener;
    }, []);
    useEffect(() => {
        let listener = () => { };
        if (authUserDetails) {
            setLoading(true);

            console.log("Logged In, Fetching Data")
            listener = onSnapshot(doc(db, 'users', authUserDetails.uid), (d) => {
                if (d.data()) {
                    setUserDetails(d.data());
                    setLoading(false);
                }
                else {
                    let userData = {
                        email: authUserDetails.email,
                        createdSets: [],
                        editingSets: [],
                        learningSets: [],
                    }
                    setDoc(doc(db, 'users', authUserDetails.uid), userData).then(response => {
                        setLoading(false);
                    })
                }
            })
        }
        else {
            setUserDetails(null);
            listener();
            setLoading(false);
        }
        return () => {
            setUserDetails(null);
            listener();
        }
    }, [authUserDetails])
    const values = {
        authUserDetails,
        userDetails,
        loading
    };
    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}

export default UserContext;
export { UserContextProvider };