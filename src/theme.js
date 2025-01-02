import { createTheme } from "@mui/material";

const orange = '#ff5722';
const black = '#000000';
const BurntSienna = '#E97451';
const DarkSienna = '#C68642';
const SandyBrown = '#E76F51';
const OrangePeel = '#FF9F1C';
const HunyadiYellow = '#FFBF69';

const PersionGreen = '#2A9D8F';
const Charcoal = '#264653';
const LitghtSeaGreen = '#CBF3F0';
const MintGreen = '#2EC4B6';

const white = '#FFFFFF';


const theme = createTheme({
    palette: {
        mode: 'dark',
    },

    typography: {
        fontFamily: 'Roboto, monospace',

        body1: {
            fontSize: '22px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'navbar', color: 'primary' },
                            style: {
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: BurntSienna,
                                    color: black,
                                },
                                // border: `1px solid white`,
                                margin: '0 5%',
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;
