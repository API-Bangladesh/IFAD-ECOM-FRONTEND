import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchAddresses = async () => {
    try {
        return await axios.get(`/addresses`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @returns {Promise<*>}
 */
export const updateDefaultBillingAddress = async (id) => {
    try {
        return await axios.put(`/addresses/${id}/default-billing`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @returns {Promise<*>}
 */
export const updateDefaultShippingAddress = async (id) => {
    try {
        return await axios.put(`/addresses/${id}/default-shipping`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}