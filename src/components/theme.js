import {purple, grey, red, blueGrey, lightGreen} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        // type: "dark",
        // primary: {
        //     main: '#556cd6',
        // },
        // secondary: {
        //     main: '#19857b',
        // },
        // error: {
        //     main: red.A400,
        // },
        // background: {
        //     default: '#fff',
        // },
        // primary: {
        //     light: lightGreen[300],
        //     main: lightGreen[500],
        //     dark: lightGreen[700]
        // },
        // secondary: {
        //     light: blueGrey[300],
        //     main: blueGrey[500],
        //     dark: blueGrey[700]
        // },
        primary: {
            main: '#757575'
        }
    },
});

const aa = createMuiTheme({
    palette: {
        type: "dark",
        primary: { // works
            main: '#165788',
            contrastText: '#fff',
        },
        secondary: { // works
            main: '#69BE28',
            contrastText: '#fff',
        },
        companyBlue: { // doesnt work - defaults to a grey button
            main: '#65CFE9',
            contrastText: '#fff',
        },
        companyRed: { // doesnt work - grey button
            main: '#E44D69',
            contrastText: '#000',
        },
        accent: {backgroundColor: purple[500], color: '#000'}

    },
});

const Paperbase = createMuiTheme({
    palette: {
        type: "dark",

        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

export default Paperbase;