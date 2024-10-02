import axios from "axios";
import {IPageResponse, IProduct} from "../types/product.ts";
const host:string ='http://118.38.219.107:8089/api/products';
// const host:string ='http://172.30.1.99:8089/api/products';
const header =
    {
        headers: {'content-type' : 'multipart/form-data'}
    }
export const getProductList = async( page?:number, size?:number): Promise<IPageResponse> => {
    const pageValue:number = page || 1
    const sizeValue:number = size || 10
    const res = await axios.get(`${host}/list?page=${pageValue}&size=${sizeValue}`);
    return res.data;
}
export const getOne = async(pno:number) : Promise<IProduct> => {
    const res = await axios.get(`${host}/${pno}`)
    return res.data;
}
export const postAdd = async (formData: FormData): Promise<number> => {
    const res = await axios.post(`${host}/`, formData, header)
    console.log(res)
    // return Number(res.data)
    return 0
}
export const putOne = async  (formData: FormData, pno: number): Promise<IProduct> => {
    const res = await axios.put(`${host}/${pno}`, formData)
    return res.data
}
export const deleteOne = async  (pno: number): Promise<IProduct> => {
    const res = await axios.delete(`${host}/${pno}`)
    return res.data
}