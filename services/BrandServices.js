import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";
import {API_BASE_URL} from "../utils/constants";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchBrands = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/content-module/27`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
