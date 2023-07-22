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

/**
 *
 * @param invenotryId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const hasInventoryReviewAbility = async (invenotryId) => {
    try {
        return await axios.get(`/inventories/${invenotryId}/reviews/ability`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}

/**
 *
 * @param invenotryId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const fetchInventoryReviews = async (invenotryId) => {
    try {
        return await axios.get(`/reviews/inventories/${invenotryId}`);
    } catch (error) {
        tostify(toast, 'error', error);
    }
}