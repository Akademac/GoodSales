let initialState = {
  sort: 'regular'
}

const sortData = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SORT_DATA":
      return { sort: payload }
      break;

    default:
      return state;
      break;
  }
}

export default sortData;