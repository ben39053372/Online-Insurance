import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiList: {
      root: {
        background: '#F2F2F2',
        margin: '8px 5px',
        borderRadius: '10px'
      },
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiListSubheader: {
      root: {
        lineHeight: '38px',
        fontWeight: 'bold',
        background: '#229',
        color: '#FFF',
        fontSize: '1rem',
        borderRadius: '6px 6px 0 0'
      }
    },
    MuiAppBar: {
      root: {
        background: '#00f'
      }
    },
    MuiTextField: {
      // Name of the rule
      root: {
        // Some CSS
        margin: '5px 0px',
        borderRadius: '10px',
        backgroundColor: '#FFF',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        background: '#eee'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        backgroundColor: '#EEE',
        width: '100%'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.1rem'
      }
    },
    // MuiInput-underline:hover:not(.Mui-disabled):before
    MuiInput: {
      root: {
        paddingLeft: '13px',
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      underline: {
        '&:before':{
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&:after": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&&&&:hover:before": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):before': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):after': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
      }
    },
    MuiInputBase: {
      root: {
        color: 'rgba(0,0,0,1)',
        fontSize: '0.8rem',

      }
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(0, 1.5px) scale(0.75)",
        transformOrigin: "top left",
        left: '10px',
        top: '5px'
      }
    },
    MuiLinearProgress: {
      colorSecondary: {
        backgroundColor: '#922'
      },
      barColorSecondary: {
        backgroundColor: '#b77'
      }
    },
    MuiSelect: {
      root: {
        borderRadius: '50px',
        '&$focused': {
          backgroundColor: 'rgba(0,0,0,1)'
        }
      },
      selectMenu: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: '5px'
      },
      select: {
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      
    }
  },
});