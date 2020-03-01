export const ishaveTokenOne = () => {
  if (localStorage.getItem('jwt1') !== null && localStorage.getItem('jwt1') !== undefined) {
    return true
  }else {
    return false
  }
}

export const ishaveTokenTwo = () => {
  if(localStorage.getItem('jwt2') !== null && localStorage.getItem('jwt2') !== undefined) {
    return true
  }else {
    return false
  }
}