import { colors, createTheme } from "@mui/material";

const orange = '#ff5722';
const black = '#000000';
const BurntSienna = '#E97451';
const DarkSienna = '#C68642';
const SandyBrown = '#E76F51';
const OrangePeel = '#FF9F1C';
const HunyadiYellow = '#FFBF69';
const OrangeGrey = '#d9d1ca';
const PersionGreen = '#2A9D8F';
const Charcoal = '#264653';
const LitghtSeaGreen = '#CBF3F0';
const MintGreen = '#2EC4B6';

const white = '#FFFFFF';


const theme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            secondary: SandyBrown,
            main: DarkSienna,
        },
    },

    typography: {
        fontFamily: 'Roboto, monospace',

        h5: {
            color: OrangePeel,
        },
        body3: {
            color: OrangeGrey,
            fontSize: '20px',
        },
        body1: {
            color: OrangeGrey,
            fontSize: '24px',
        },
        body2: {
            color: OrangeGrey,
            fontSize: '22px',
        },
        body3: {
            color: SandyBrown,
            fontSize: '18px',
        },

    },
    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'navbar' },
                            style: {
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: BurntSienna,
                                    color: black,
                                },
                                // border: `1px solid white`,
                                height: '100%',
                            },
                        },
                        {
                            props: { variant: 'keywords' },
                            style: {
                                color: white,
                                // backgroundColor: OrangePeel,
                                border: `1px solid ${OrangePeel}`,
                                '&:hover': {
                                    border: `1px solid ${orange}`,
                                    backgroundColor: BurntSienna,
                                    color: black,
                                },
                                margin: '5px',
                            },
                        }, 
                        {
                            props: { variant: 'big_orange' },
                            style: {
                                width: '100%',
                                fontSize: '20px',
                                color: black,
                                backgroundColor: OrangePeel,
                                '&:hover': {
                                    backgroundColor: Charcoal,
                                    color: OrangePeel,
                                },
                            },
                        },
                        {
                            props: { variant: 'small_orange' },
                            style: {

                                fontSize: '20px',
                                color: black,
                                backgroundColor: OrangePeel,
                                '&:hover': {
                                    backgroundColor: Charcoal,
                                    color: OrangePeel,
                                },
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;
