import { toast } from 'react-toastify';

/**
 * Displays toast notifications using 'react-toastify'.
 *
 * @param {string} message - The message to display in the toast.
 * @param {'success' | 'error' | 'warning' | 'info'}
 * @returns {void}
 */
export const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warning':
            toast.warning(message);
            break;
        default:
            toast.info(message);
    }
};
