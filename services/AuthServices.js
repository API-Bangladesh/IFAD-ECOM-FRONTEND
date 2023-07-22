import axios from "../utils/axios";
import {makeInputErrors, tostify} from "../utils/helpers";
import {toast} from "react-toastify";
import {token} from "../utils/auth";

/**
 *
 * @return {Promise<void>}
 */
export const registerCustomer = async (data, setErrors) => {
    try {
        return await axios.post('/register', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const loginCustomer = async (data, setErrors) => {
    try {
        return await axios.post('/login', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const logoutCustomer = async () => {
    try {
        await axios.post('/logout', {}, {
            headers: {
                authorization: token()
            }
        });
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
