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