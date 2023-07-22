import Cookies from 'js-cookie'
import cookie from 'cookie'
import {logoutClient} from "../services/AuthServices";

/**
 *
 * @param reqCookies
 * @return {boolean}
 */
export const isLoggedIn = (reqCookies = null) => {
    if (!reqCookies) {
        return !!Cookies.get('X-ACCESS-TOKEN');
    }

    return !!cookie.parse(reqCookies)['X-ACCESS-TOKEN'];
}

/**
 *
 * @param token
 */
export const setToken = (token = '') => {
    Cookies.set('X-ACCESS-TOKEN', token, {
        expires: 86400,
        sameSite: 'lax'
    });
}

/**
 *
 * @param token
 */
export const login = (token = '') => {
    Cookies.set('X-ACCESS-TOKEN', token, {
        expires: 86400,
        sameSite: 'lax'
    });

    // Redirect...
    if (typeof window !== 'undefined') {
        const redirectTo = localStorage.getItem('redirectTo');

        if (redirectTo) {
            location.href = redirectTo;

            setTimeout(() => {
                localStorage.setItem('redirectTo', '');
            });
        } else {
            location.href = '/profile';
        }
    }
}

/**
 *
 * @return {Promise<void>}
 */
export const logout = async () => {
    Cookies.remove('X-ACCESS-TOKEN', {
        expires: 86400,
        sameSite: 'lax'
    });

    logoutClient().then(r => r);

    if (typeof window !== 'undefined') {
        location.href = '/auth/auth';
    }
}

/**
 *
 * @return {*}
 */
export const token = () => {
    return Cookies.get('X-ACCESS-TOKEN') ?? '';
}
