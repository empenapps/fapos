
export const saveProduct = () => {
  return {
    type:"SAVE_PRODUCT"
    }
  };


export const getStoreProduct = (data) => {
  return {
    type:"GET_STORE_PRODUCT",
    payload: data
    }
  };


  export const setProduct = (data) => {
    return {
      type:"SET_PRODUCT",
      payload: data
      }
    };
  

