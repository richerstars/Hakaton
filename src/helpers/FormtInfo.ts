import axios from 'axios';
import { TAxiosBody } from '../Types/Types';

export const HelperFunc = async (body: TAxiosBody, contextFunc: any, navLink:any, linkReq:string, linkRedir:string) => {
    try {
        const { data: {data} } =await axios.post(linkReq, body);
        contextFunc({ type: "success", message: `${data}` });
        setTimeout(() =>navLink(linkRedir), 3000);
    } catch (error) {
        // @ts-ignore
        contextFunc({ type: "fail", message: `${error.response.data.data}` });
    }
};
export const HelperTokenBackFunc = async (body: TAxiosBody, 
    contextFunc: any, navLink: any, linkReq:string, linkRedir:string, token: string|null) => {
    try {
        const { data: {data} } = await axios({
            method: 'post',
            url:linkReq,
            data: body,
            headers: {'token': `${token}`},
        });
        contextFunc({ type: "success", message: `${data}` });
        setTimeout(() =>navLink(linkRedir), 3000);
    } catch (error) {
        // @ts-ignore
        contextFunc({ type: "fail", message: `${error.response.data.data}` });
    }
};