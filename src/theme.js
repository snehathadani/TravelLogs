import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    modal: {
        position: 'absolute',
        width: '30rem',
        height: '25vh',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        outline: 'none',
        background: 'rgba(0,0,0,.7)',
    },
    dialogPaper: {
        minWidth: '30rem',
        minHeight: '30vh',
    },
    pallete: {
        text: {
            primary: "#000000",
            secondary: "#111111"
        }
    }
});

export default theme;