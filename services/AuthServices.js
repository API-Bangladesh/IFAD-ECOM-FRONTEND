import axios from "../utils/axios";
import {makeInputErrors, tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @return {Promise<void>}
 */
export const registerClient = async (data, setErrors, setIsLoading) => {
    try {
        return await axios.post('/api/register', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
        setIsLoading(false);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const loginClient = async (data, setErrors, setIsLoading) => {
    try {
        return await axios.post('/api/login', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
        setIsLoading(false);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const verifySecretLoginClient = async (data) => {
    try {
        return await axios.post('/api/verify/secret/login', data);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const logoutClient = async () => {
    try {
        await axios.post('/api/logout');
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const forgotPasswordClient = async (data, setErrors, setIsLoading) => {
    try {
        return await axios.post('/api/forgot-password', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
        setIsLoading(false);
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const resetPasswordClient = async (data, setErrors, setIsLoading) => {
    try {
        return await axios.post('/api/reset-password', data);
    } catch (error) {
        tostify(toast, 'error', error);
        makeInputErrors(error, setErrors);
        setIsLoading(false);
    }
}

/**
 *
 * @return {Promise<AxiosResponse<any>>}
 */
export const verificationNotificationClient = async (setIsLoading) => {
    try {
        return await axios.post('/api/email/verification-notification');
    } catch (error) {
        tostify(toast, 'error', error);
        setIsLoading(false);
    }
}

/**
 *
 * @return {Promise<AxiosResponse<any>>}
 */
export const verifyEmailClient = async (id, hash) => {
    try {
        return await axios.get(`/api/verify-email/${id}/${hash}`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
