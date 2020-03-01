import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../../../style/style'

const InsureTypeTab = props => {
  const classes = useStyles()
  const data = [
    { title: '保險類別', contentEn: props.data.insuranceTypeEn, contentCht: props.data.insuranceTypeCht },
    { title: '投保額', contentEn: props.data.insuredAmount, contentCht: props.data.insuredAmount },
    { title: '投保身份', contentEn: props.data.driverRoleEn, contentCht: props.data.driverRoleCht },
    { title: '無索償折扣(NCD)', contentEn: props.data.noClaimDiscount, contentCht: props.data.noClaimDiscount }
  ]
  return (
    <Grid container>
      {data.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"InsureTypeTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.contentEn || obj.contentCht || 'None'}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default InsureTypeTab