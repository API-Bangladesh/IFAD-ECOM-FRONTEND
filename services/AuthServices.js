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
        return await axios.post(`/ecom/customers`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const forgotPasswordCustomer = async (data, setErrors) => {
    try {
        return await axios.post(`/ecom/forgot-password`, data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const resetPasswordCustomer = async (data, setErrors) => {
    try {
        return await axios.post(`/ecom/reset-password`, data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const verificationNotificationCustomer = async () => {
    try {
        return await axios.post(`/ecom/verification-notification`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const verifyEmailCustomer = async (token) => {
    try {
        return await axios.post(`/ecom/verify-email/${token}`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<AxiosResponse<any>>}
 */
export const googleLogin = async () => {
    try {
        return await axios.get(`/ecom/login/google`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<AxiosResponse<any>>}
 */
export const googleLoginCallback = async (params = {}) => {
    try {
        return await axios.get(`/ecom/login/google/callback`, {
            params: params
        });
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
