let initialState = {
  size: '', 
  checked: false
}

const markSizeR = (state=initialState, {type, payload}) => {
  switch (type) {
    case 'MARK_SIZE':
      return payload;
      break;

    case 'DE_MARK_SIZE':
      return state
    break;
    default:
      return state
      break;
  }
}

export default markSizeR;