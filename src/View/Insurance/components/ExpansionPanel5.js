import React,{useState, useEffect} from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  MenuItem,
  Fab
} from '@material-ui/core'
import {
  getRoleList,
  getNoClaimDiscountList
} from '../../../api/api/driver'
import useStyles from '../../../style/style'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

export default props => {
  const classes = useStyles()
  const [roleList, setRoleList] = useState([])
  const [noClaimDiscountList, setNoClaimDiscountList] = useState([])
  useEffect(() => {
    const x = async () => {
      const result = await Promise.all([
        getRoleList(),
        getNoClaimDiscountList()
      ])
      setRoleList(result[0].data.driverRoleList)
      setNoClaimDiscountList(result[1].data.driverNoClaimDiscountList)
    }
    x()
    // eslint-disable-next-line
  }, [])
  return (
    <ExpansionPanel expanded={props.open === 1}>
      <ExpansionPanelSummary>
        <Typography>投保者資料</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <TextField
            fullWidth
            select
            value={props.state.insuredIdentity}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, insuredIdentity: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label="投保身份"
          >
            {roleList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            value={props.state.discount}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, discount: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label="無索償折扣(NCD)"
          >
            {noClaimDiscountList.map((item, i) => (
              <MenuItem key={`option${i}${item.discount}`} value={item.id}>
                {item.discount}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            type="number"
            value={props.state.numberOfExistingVehicles}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, numberOfExistingVehicles: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label="現有車輛數目"
          />
          <Fab variant="extended" onClick={props.prev}>
            <Typography>上一步</Typography>
          </Fab>
          <Fab variant="extended" onClick={props.next}>
            <Typography>下一步</Typography>
          </Fab>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}