import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const saveReview = async (data = {}) => {
    try {
        return await axios.post(`/reviews`, data);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
