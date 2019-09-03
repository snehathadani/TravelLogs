import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    modal: {
        position: 'absolute',
        width: '30rem',
        height: '25vh',
        top: '50%',
        left: '50%',
        backgroundColor: 'rgba(0,0,0,.7)',
        border: '2px solid #000',
        color: 'white'
    },
    dialogPaper: {
        minWidth: '30rem',
        minHeight: '30vh',
    },
    palette:{
        primary: green,
    }
});

export default theme;