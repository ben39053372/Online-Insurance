const jwt = require('jsonwebtoken')

const validJwt = (token) => {

  let decoded = jwt.decode(token)
  if(Math.floor(Date.now()/1000) < decoded.exp) {
    return true
  } else {
    return false
  }
}

export const ishaveTokenOne = () => {
  let search = window.location.search
  let params = new URLSearchParams(search);
  let token = params.get('t')
  if(token !== null) localStorage.setItem('jwt1', token)
  if (localStorage.getItem('jwt1') !== null && localStorage.getItem('jwt1') !== undefined) {
    return true
  }else {
    return false
  }
}

export const ishaveTokenTwo = () => {
  let search = window.location.search
  let params = new URLSearchParams(search);
  let token = params.get('t')
  
  if(token !== null) localStorage.setItem('jwt2', token)
  if(localStorage.getItem('jwt2') !== null && localStorage.getItem('jwt2') !== undefined) {
    return validJwt(localStorage.getItem('jwt2'))
  }else {
    return false
  }
}