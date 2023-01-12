const initialState = {
}

const product = (state= initialState, action) => {

    switch (action.type) {
    case "SAVE_PRODUCT": 
      return state;
    case "SET_PRODUCT": 
      return {
        ...state,
        data: action.payload
      }; ;
    case "GET_STORE_PRODUCT":
      return {
        ...state,
        data: action.payload
      }; 
    default:
      return state;
  } 
}
  
export default product ;
