import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? "#2F2E41" : "white"};
        margin: 0;
    }
`
export default StyledGlobalStyle