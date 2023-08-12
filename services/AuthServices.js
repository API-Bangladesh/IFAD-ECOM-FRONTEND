import axios from "../utils/axios";
import {makeInputErrors, tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @return {Promise<void>}
 */
export const registerCustomer = async (data, setErrors) => {
    try {
        return await axios.post('/ecom/register', data);
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
        return await axios.post('/ecom/login', data);
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
        await axios.post('/ecom/logout');
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const updateCustomer = async (data, setErrors) => {
    try {
        return await axios.put(`/ecom/customers`, data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}