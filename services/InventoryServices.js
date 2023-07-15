import axios from "../utils/axios";
import {tostify} from "../utils/helpers";
import {toast} from "react-toastify";

/**
 *
 * @returns {Promise<*>}
 */
export const fetchInventories = async (params = {}) => {
    try {
        return await axios.get(`/inventories`, {
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
export const fetchInventoriesByCategory = async (categoryId, params = {}) => {
    try {
        return await axios.get(`/inventories/categories/${categoryId}`, {
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
export const fetchInventory = async (id, params = {}) => {
    try {
        return await axios.get(`/inventories/${id}/show`, {
            params: params
        });
    } catch (error) {
        tostify(toast, 'error', error);
    }
}
