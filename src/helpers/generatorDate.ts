import {getDay, getMonth, getYear} from 'date-fns';

export const getFormattedDate = (value: Date) => {
    return `${getMonth(+value)+1}.${getDay(value)}.${getYear(value)}`;
};