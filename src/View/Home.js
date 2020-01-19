import React from 'react'
import Carousel from '../component/Carousel'
import { TextField, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  gridRoot: {
    flexGrow: 1,
  }
}))

const expansionPanel = [
  {
    name:"車輛資料",
    column: [
      {
        label: "登記類別",
        autoFocus: true
      }, {
        label: "車廠名稱"
      },{
        label: "出廠年份"
      },{
        label: "型號"
      },{
        label: "引擎容量(c.c)"
      },{
        label: "車身類型"
      }
    ]
  },
  {
    name: "車主資料",
    column: [
      {
        label: "投保身份"
      }, {
        label: "出身日期"
      }, {
        label: "所屬行業"
      }, {
        label: "無索償折扣(NCD)"
      }, {
        label: "駕駛經驗(年)"
      }, {
        label: "職位"
      }
    ]
  },{
    name: "投保類別",
    column: [
      {
        label: "網上購買汽車保險"
      }, {
        label: "請選擇保險類別"
      }, {
        label: "全保投保額(HK$) #"
      }
    ]
  },{
    name: "完成報價",
    text: "只差一步!請提供您的聯絡資料方便我們即時提供報價消息!",
    column: [
      {
        label: "您的電郵"
      },{
        label: "您的手提號碼"
      }
    ]
  }
]

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel />
      {expansionPanel.map(item => {
        return (
          <ExpansionPanel key={item.name}>
            <ExpansionPanelSummary>
              {item.name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.root}>
              <Typography>
                {item.text}
              </Typography>
              {item.column.map(col => {
                return (
                  <TextField
                    className={classes.textField}
                    fullWidth
                    key={col.label}
                    {...col}
                  />
                )
              })}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

export default Home