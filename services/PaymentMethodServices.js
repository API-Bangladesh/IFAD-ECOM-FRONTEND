import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchPaymentMethods = async () => {
    try {
        return await axios.get(`/payment-methods`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
