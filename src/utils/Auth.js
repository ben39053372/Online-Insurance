

export const ishaveTokenOne = () => {
  console.log(window.location.search)
  let search = window.location.search
  let params = new URLSearchParams(search);
  let token = params.get('t')
  console.log(token)
  if(token !== null) localStorage.setItem('jwt1', token)
  if (localStorage.getItem('jwt1') !== null && localStorage.getItem('jwt1') !== undefined) {
    return true
  }else {
    return false
  }
}

export const ishaveTokenTwo = () => {
  console.log(window.location.search)
  let search = window.location.search
  let params = new URLSearchParams(search);
  let token = params.get('t')
  console.log(token)
  if(token !== null) localStorage.setItem('jwt2', token)
  if(localStorage.getItem('jwt2') !== null && localStorage.getItem('jwt2') !== undefined) {
    return true
  }else {
    return false
  }
}