export default (theme) => ({
  card: {
    '&:last-child': {
      borderBottom: "1px solid #ccc"
    },
    borderTop: "1px solid #ccc",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: 0,
    boxShadow: 'none'
  },
  ball: {
    borderRadius: '30px',
    height: '20px',
    width: '20px',
    padding: 0,
    display: 'inline-block',
    margin: '5px'
  },
  CardContent: {
    padding: '8px',
    '&:last-child': {
      paddingBottom: '6px'
    }
  },
  date: {
    display: 'inline',
    height: '20px',
    position: 'relative',
    top: '-9px'
  },
  title: {
    textAlign: 'center'
  },
  content: {
    textAlign: 'center'
  }
})