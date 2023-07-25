import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const saveOrder = async (data = {}) => {
    try {
        return await axios.post(`/orders`, data);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
