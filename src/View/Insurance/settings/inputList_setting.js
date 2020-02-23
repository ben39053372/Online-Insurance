import {
  getRegisterType,
  getbrandList,
  getManufactureYearList,
  getBodyTypeList
} from '../../../api/api/car/car'

export const carState = {
  regisType: '',
  depotName: '',
  manufactureYear: '',
  model: '',
  engineCapacity: '',
  carBodyType: ''
}
export const ownerState = {
  insuredIdentity: '',
  dateOfBirth: {
    year: "2000年",
    month: "1月",
    date: "1日"
  },
  industry: '',
  discount: '',
  drivingExperience: '',
  position: '',
  numberOfExistingVehicles: ''
}
export const insureTypeState = {
  onlineInsure: '',
  insureType: '',
  insureSum: ''
}

// type: (text, date, checkBox, button)
export const completeState = {
  email: '',
  mobile: ''
}

const map = async () => {
  const result = await Promise.all([
    getRegisterType(),
    getbrandList(),
    getManufactureYearList(),
    getBodyTypeList()
  ])
  let eps = await expansionPanelSetting
  eps[0].column[0].selectoption = await result[0].carRegisterTypeList
  eps[0].column[1].selectoption = await result[0].brandList
  eps[0].column[3].selectoption = await result[0].yearList
  eps[0].column[4].selectoption = await result[0].bodyTypeList
  return eps
}


var expansionPanelSetting = [
  {
    name: "車輛資料",
    column: [
      {
        label: "登記類別",
        name: 'registerType',
        autoFocus: true,
        type: 'text',
        select: true,
        selectoption: [
          { value: 'abc', label: 'abc' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "車廠名稱",
        type: 'text',
        name: 'depotName',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "出廠年份",
        type: 'text',
        name: 'manufactureYear',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "型號",
        type: 'text',
        name: 'model'
      }, {
        label: "引擎容量(c.c)",
        type: 'text',
        name: 'engineCapacity'
      }, {
        label: "車身類型",
        type: 'text',
        name: 'carBodyType',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' },
          { value: 'value', label: 'label' }
        ]
      }
    ]
  },
  {
    name: "車主資料",
    column: [
      {
        label: "投保身份",
        name: 'insuredIdentity',
        type: 'text',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "出生日期",
        name: 'dateOfBirth',
        type: 'date',
      }, {
        label: "所屬行業",
        name: 'industry',
        type: 'text',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "無索償折扣(NCD)",
        name: 'discount',
        type: 'text',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "駕駛經驗(年)",
        name: 'drivingExperience',
        type: 'text'
      }, {
        label: "職位",
        name: 'position',
        type: 'text',
        select: true,
        selectoption: [
          { value: 'value', label: 'label' }
        ]
      }, {
        label: "現有車輛數目",
        name: 'numberOfExistingVehicles',
        type: 'text'
      }
    ]

  }, {
    name: "投保類別",
    column: [
      {
        label: "網上購買汽車保險",
        name: 'onlineInsure',
        type: 'button',
        buttons: [
          { label: "了解更多" }
        ]
      }, {
        label: "請選擇保險類別",
        name: 'insureType',
        type: 'checkBox',
        buttons: [
          { label: "全保" },
          { label: "三保" }
        ]
      }, {
        label: "全保投保額(HK$) #",
        name: 'insureSum',
        type: 'text'
      }
    ]
  }, {
    name: "完成報價",
    text: "只差一步!請提供您的聯絡資料方便我們即時提供報價消息!",
    column: [
      {
        label: "您的電郵",
        name: 'email',
        type: 'text'
      }, {
        label: "您的手提號碼",
        name: 'mobile',
        type: 'text'
      }
    ]
  }
]

export default map