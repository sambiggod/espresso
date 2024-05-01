import { createRoot } from 'react-dom/client';

import AppContainer from "./components/app";

export const getEspresso = () => {
    return 'testValue'
}

export const initEspresso = () => {
    console.log('[expresso init] init espresso');
}

export const getApp = (id: string) => {
    return AppContainer;
}




export default {
    initEspresso,
    getApp,
    getEspresso,
}
