import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchOrders = async (params = {}) => {
    try {
        return await axios.get(`/ecom/orders`, {
            params: params
        });
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @returns {Promise<*>}
 */
export const saveOrder = async (data = {}) => {
    try {
        return await axios.post(`/ecom/orders`, data);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
