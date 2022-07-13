export const changeHeaderColor = (payload) => {
  return {
    type: "CHANGE_HEADER_COLOR",
    payload: payload
  }
}

export const moduleShowHide = (payload) => {
  return {
    type: 'SHOW_HIDE_MODULE', 
    payload
  }
}

export const showMiniNav = (payload) => {
  return {
    type: 'SHOW_MINI_NAV',
    payload
  }
}