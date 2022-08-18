const initialState = {
  num: 0, 
  
}


const quantityR = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'QUANT_PLUS':
      return state;
      break;
    case 'QUANT_MINUS':
      return state;
      break;

    default:
      return state;
      break;
  }
}

export default quantityR;