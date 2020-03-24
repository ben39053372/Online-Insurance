const SWITCH_LANG = 'SWITCH_LANG'

const initState = {
  lang: localStorage.getItem('lang') || 'cht'
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case SWITCH_LANG:
      localStorage.setItem('lang',action.payload)
      return {
        lang: action.payload
      }
    default:
      return state;
  }
}

export default reducer