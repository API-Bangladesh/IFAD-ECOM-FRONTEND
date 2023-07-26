/**
 *
 * @returns {Promise<*>}
 */
import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";
import {API_BASE_URL} from "../utils/constants";

export const fetchSocial = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/16`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

export const fetchHomeBanners = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/26`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @returns {Promise<*>}
 */

export const fetchAboutInfo = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/4`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

export const fetchMissionVision = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/21`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

export const fetchValues = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/20`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

export const sendContactForm = async (data) => {
    try {
        return await axios.post(`${API_BASE_URL}/send-contact-form`, data)
    } catch (error) {
        tostify(toast, 'error', error);
    }
}