import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiPaper: {
      elevation1: {
        boxShadow: 'none'
      }
    },
    MuiCardContent: {
      root: {
        padding: 0
      }
    },
    MuiContainer: {
      root: {
        margin: '20px 0'
      }
    },
    MuiList: {
      root: {
        background: '#EEE',
        margin: '8px 0px',
        borderRadius: '10px',
        width: '100%',
        border: '1px solid #DFDFDF'
      },
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiDialogTitle: {
      root: {
        padding: '10px 10px',
        background: '#922',
        color: '#FFF',
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
        backgroundColor: '#229'
      },
      colorPrimary: {
        backgroundColor: '#229'
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
        fontSize: '0.9rem',

      }
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(-3px, 1.0px) scale(0.75)",
        transformOrigin: "top left",
        left: '5px',
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
    },
    MuiFab: {
      label: {
        fontSize: '2.5vw'
      }
    }
  },
});