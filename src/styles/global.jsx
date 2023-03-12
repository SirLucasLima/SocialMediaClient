import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  //font-family: 'Gloria Hallelujah', cursive;
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }
  
  :root{
    font-size: 62.5%;
  }
`


export const darkTheme = {
  orangeSoft: '#F28627',
  purple: '#a456f1',
  pink: '#F21B6A',
  red: '#BF0404',
  blue: '#5e9de4',
  
  logo: '#D95407',
  textColor: 'whitesmoke',
  textColorSoft: 'lightgray',
  bg: '#222',
  bgSoft: '#333',
  border: '#444',
}

export const lightTheme = {
  logo: 'darkblue',
  textColor: '#000',
  textColorSoft: '#555',
  bg: 'white',
  bgSoft: '#f6f3f3',
  border: 'lightgray',
}
