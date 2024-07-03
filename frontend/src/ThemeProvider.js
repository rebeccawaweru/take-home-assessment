import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary:{
            main: '#5ACCCC'
        },
        secondary:{
            main:'#CFFAFA'
        },
        background:{
            default:'#FFFFFF'
        }
    }
});

export default function CustomTheme({children}){
   return <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}
   </ThemeProvider>
}