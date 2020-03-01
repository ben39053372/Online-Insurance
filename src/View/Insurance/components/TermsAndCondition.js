import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core'
import { getTermsANdCondition } from '../../../api/api/quotation'
import useStyles from '../../../style/style'

export default React.memo(props => {
  const classes = useStyles()
  const [data, setData] = useState({})
  useEffect(() => {
    getTermsANdCondition(1).then(res => {
      console.log(res)
      setData(res.data.termsAndConditions)
    })
  }, [])

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{data.titleEn || data.titleCht}</DialogTitle>
      <DialogContent>
        {data.contentEn || data.contentCht}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
})