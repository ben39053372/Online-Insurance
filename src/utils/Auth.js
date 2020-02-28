export const ishaveTokenOne = () => {
  if (localStorage.getItem('jwt1') !== null) {
    return true
  }else {
    return false
  }
}