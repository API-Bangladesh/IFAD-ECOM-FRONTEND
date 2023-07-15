import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchBanners = async () => {
    try {
        return await axios.get(`/banners`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
