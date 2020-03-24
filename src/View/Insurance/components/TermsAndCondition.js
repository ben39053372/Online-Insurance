import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core'
import { getTermsANdCondition } from '../../../api/api/quotation'
import { useSelector } from 'react-redux'

export default React.memo(props => {
  const [data, setData] = useState({})
  useEffect(() => {
    getTermsANdCondition(1).then(res => {
      // console.log(res)
      setData(res.data.termsAndConditions)
    })
  }, [])
  const lang = useSelector(state=>state.lang)
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{lang==='eng'?data.titleEn:data.titleCht}</DialogTitle>
      <DialogContent>
        {lang==='eng'?data.contentEn:data.contentCht}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.onClose} color="primary">
        {lang==='eng'?'Close':'關閉'}
        </Button>
      </DialogActions>
    </Dialog>
  )
})