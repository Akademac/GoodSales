
export const isInCart = (cart, key) => {
  let existing = false;
  cart.forEach((item) => {
    if (item.key === key) {
      existing = true; // item vec postoji u cartu
    }
  });
  return existing;
};



const addtoCartHelper = (cart, key) => {
  let newCart = [];
  let existing = false;
  cart.forEach((item) => {
    if (item.key === key) {
      existing = true; // item vec postoji u cartu
    }
  });
  // faza 2
  if (existing) {
    newCart = cart.map(item => {
      // slucaj kad vec postoji u cart, samo menajamo kolicinu
      if (item.key === key) {
        const updatedCartItem = {
          ...item,
          quantity: item.quantity + 1
        };
        return updatedCartItem;
      }
      return item; // svi ostali neizmenjeni
    });
  } else {
    // slucaj novog itema
    const newCartitem = {
      key,
      quantity: 1,
      choosenSize: '' // ZODO da se ovde cuva izabrana velicina S M L XL itd...
    };
    newCart = [...cart, newCartitem];
  }
  return newCart;
};


const choosenSizehelper = (cart, key, size) => {
  return cart.map(item => {
    if (item.key === key) {
      return {
        ...item,
        choosenSize: size
      };
    }
    return item; // svi ostali neizmenjeni
  });
};



const removefromCartHelper = (cart, key) => {
  let newCart = [];
  cart.forEach(item => {
    if (item.key === key) {
      // to je taj kojem menjamo
      if (item.quantity > 1) {
        const updatedCartItem = {
          ...item,
          quantity: item.quantity - 1
        };
        newCart.push(updatedCartItem);
      } else {
        // ukoliko ima kolicinu 1 onda ga (ne smanjemo na nula) brisemo iz carta 
        // brisemo ga tako sto ga ne pushujemo u novi array
      }
    } else {
      // svi ostali neizmenjeni
      newCart.push(item);
    }
  });
  return newCart;
};

const annulfromCartHelper = (cart, key) => {
  return cart.filter(item => {
    if (item.key === key) {
      return false; // brise ga bez obzira na kolicinu
    }
    return true; // svi ostali ostaju
  })
};








const addToCartR = (state = [], { type, payload }) => {
  switch (type) {

    case 'ADD_TO_CART':
      /*
      if (!state.includes(payload)) {
        return [...state, payload];
      }
      else {
        return [...state]
      }
      */
      return addtoCartHelper(state, payload);
      break;

    case 'REMOVE_FROM_CART':
      /*
      return (state = state.filter((x) => {
        return x !== payload;
      }));
      */
      return removefromCartHelper(state, payload)

    case 'ANNUL_FROM_CART':
      return annulfromCartHelper(state, payload)

    case 'CHOOSEN_SIZE':
      return choosenSizehelper(state, payload.key, payload.size)


    default:
      return state;
      break;
  }
}

export default addToCartR;
