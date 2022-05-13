import { useContext } from "react";
import { ContextUser } from '../../contexts/User/index';

export const useUser = () => {
    return useContext(ContextUser);
}