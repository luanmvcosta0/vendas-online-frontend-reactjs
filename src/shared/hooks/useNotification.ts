import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';
import { useGlobalContext } from './useGlobalContex';



export const useNotification = () => {
    const [api, contextHolder] = notificationAntd.useNotification();
    const { notification } = useGlobalContext();

    useEffect(() => {
    if (notification?.message && notification.type) {
        api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'bottomRight',
        });
    }
}, [notification]);

    return {
    api,
    contextHolder,
    };
};