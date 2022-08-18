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

export const showSortFiltOptions = (payload) => {
  return {
    type: "SHOW_SORT_FILT_OPTIONS",
    payload
  }
}

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
    }, 1000)
  };
};


// GET SINGLE DATA

export const getSingleProduct = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'SINGLE_PRODUCT_FETCHING',
    });
    setTimeout(() => {
      fetch("https://akademac.github.io/goodSalesAPI/goodSales.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          let allProducts = [...data.goodSales[0].mans, ...data.goodSales[1].women]
          let singleProduct = allProducts.filter(x => x.key === params)
          dispatch({
            type: 'SINGLE_PRODUCT_FETCHED',
            payload: singleProduct,
          })
        })
        .catch(err => {
          dispatch({
            type: 'SINGLE_PRODUCT_FAILED',
          })
        })
    }, 1000)
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


// Sort Data

export const sortData = (payload) => {
  return {
    type: 'SORT_DATA',
    payload
  }
}


//Add to Cart

export const addToCart = (payload) => {
  return {
    type: 'ADD_TO_CART', 
    payload
  }
}

export const removeFromCart = (payload) => {
  return {
    type: 'REMOVE_FROM_CART', 
    payload
  }
}

export const annulFromCart = (payload) => {
  return {
    type: 'ANNUL_FROM_CART', 
    payload
  }
}

export const choosenSize = (key, size) => {
  return {
    type: 'CHOOSEN_SIZE', 
    payload: {
      key,
      size
    }
  }
}

export const clickCheck = (payload) => {
  return {
    type: 'CLICK_CHECK', 
    payload
  }
}

export const quantPlus = (payload) => {
  return {
    type: 'QUANT_PLUS', 
    payload
  }
}

export const quantMinus = (payload) => {
  return {
    type: 'QUANT_MINUS', 
    payload
  }
}