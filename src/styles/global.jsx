import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 62.5%;
  }
`
export const darkTheme = {
  textColor: 'whitesmoke',
  bg: '#222',
  logo: 'white',
  bgSoft: '#333',
  textColorSoft: 'lightgray',
  border: '#444',
}

export const lightTheme = {
  textColor: '#000',
  bg: 'white',
  logo: 'darkblue',
  bgSoft: '#f6f3f3',
  textColorSoft: '#555',
  border: 'lightgray',
}
