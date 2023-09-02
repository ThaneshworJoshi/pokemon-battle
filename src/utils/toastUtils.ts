import { toast } from 'react-toastify';

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
