import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core'
import { getTermsANdCondition } from '../../../api/api/quotation'

export default React.memo(props => {
  const [data, setData] = useState({})
  useEffect(() => {
    getTermsANdCondition(1).then(res => {
      // console.log(res)
      setData(res.data.termsAndConditions)
    })
  }, [])

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{data.titleCht || data.titleEn}</DialogTitle>
      <DialogContent>
        {data.contentCht || data.contentEn}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
})