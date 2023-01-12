import axios from 'axios';
import { BASE_URL } from './../../Api';
import { getProduct } from '../actions/product';



export const getProductList = async() => {

    let api;

    await axios.get(`${BASE_URL}/product/list/1`)
    .then(response=>{
        console.log(response.status);
        console.log(response.data);
        api = response.data;
    })
    .catch(error=>{
        console.log(error);
    })

    return api;
}
