import { updateURL } from './urlManager.js';
import { CONFIG } from './config.js';

/**
 * Initializes the message event listener
 */
export function initMessageHandler() {
    window.addEventListener('message', handleMessage, false);
}

/**
 * Handles incoming postMessage events
 * @param {MessageEvent} event - The message event object
 */
function handleMessage(event) {
    if (!event.data || typeof event.data !== 'string') {
        return;
    }

    if (event.data.substr(0, 5) === CONFIG.MESSAGE_PREFIX) {
        const path = event.data.substr(5);
        updateURL(path);
    }
}