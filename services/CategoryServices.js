import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchCategories = async (params = {}) => {
    try {
        return await axios.get(`/ecom/categories`, {
            params: params
        });
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
