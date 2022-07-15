export const changeHeaderColor = (payload) => {
  return {
    type: "CHANGE_HEADER_COLOR",
    payload: payload,
  };
};

export const moduleShowHide = (payload) => {
  return {
    type: "SHOW_HIDE_MODULE",
    payload,
  };
};

export const showMiniNav = (payload) => {
  return {
    type: "SHOW_MINI_NAV",
    payload,
  };
};

// THUNK PRACTICE!!!! CHECK STORE AND REDUCER

export const getData = (params) => {
  return (dispatch) => {
    dispatch({
      type: "ALL_DATA_FETCHING",
    });
    setTimeout(() => {
      fetch("https://akademac.github.io/goodSalesAPI/goodSales.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'ALL_DATA_FETCHED', 
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: 'ALL_DATA_FAILED', 
        })
      })
    }, 5000)
  };


};

// export function getData() {  
//   return dispatch => {
//     (async function() {
//       function onSuccess(success) {
//         console.log('on success', success);
//         dispatch({ type: 'ALL_DATA_FETCHED', payload: success });
//         return success;
//       }
//       function onError(error) {
//         dispatch({ type: 'ALL_DATA_FAILED', error });
//         return error;
//       }
//       try {
//         const success = await fetch("https://akademac.github.io/goodSalesAPI/goodSales.json");
//         // return onSuccess(success);
//         onSuccess(success.json());
//       } catch (error) {
//         // return onError(error);
//         onError(error);
//       }
//     })()
//   }
// }
