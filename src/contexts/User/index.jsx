import { createContext, useEffect, useState } from "react";

export const ContextUser = createContext();

export default function ProviderUser({ children }) {

    const [ userLogged, setUserLogged ] = useState(false);
    const [ nameUser, setNameUser ] = useState('');
    const [ validateUser, setValidateUser ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user == null) {
            return setUserLogged(false);
        }
        
        const userJSON = JSON.parse(user);
        setNameUser(userJSON.user.name);
        return setUserLogged(true);
    }, [validateUser]);

    return (
        <ContextUser.Provider value={{
            userLogged,
            nameUser,
            validateUser,
            setValidateUser
        }}>

            { children }

        </ContextUser.Provider>
    )
}