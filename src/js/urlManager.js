import { CONFIG } from './config.js';

/**
 * Updates the browser URL with the new path
 * @param {string} path - The path to append to the base URL
 */
export function updateURL(path) {
    const newURL = `${CONFIG.BASE_URL}${path}`;
    window.history.pushState('url', CONFIG.PAGE_TITLE, newURL);
}