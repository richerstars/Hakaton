import {URL} from '../constants/url';
import {TEXT_VALUES} from '../constants/textValues';

export const getNextRoute = (currentLink:string) => {
    switch (currentLink){
        case URL.DEFAULT_PAGE:
            return {link:URL.SIGN_UP, content: TEXT_VALUES.SIGN_UP};
        case URL.SIGN_IN:
            return {link:URL.SIGN_UP, content: TEXT_VALUES.SIGN_UP};
        default:
            return {link:URL.SIGN_IN, content: TEXT_VALUES.LOG_IN};
    }
};