import axios from 'axios';
import { BASE_URL } from '../../Api';


export const saveProductInfo = (data) => {
    
    axios.put(`${BASE_URL}/product/save`, data)
    .then(response=>{
        console.log(response.status);
    })
    .catch(error=>{
        console.log(error);
    })

}
