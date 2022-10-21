import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
*{
 box-sizing: border-box;
}
body {
 font-family: 'Poppins', sans-serif;
 color: ${({ theme }) => theme.colors.black};
 font-size: ${({ theme }) => theme.fontSizes.body};
 margin: 0;
}
h3{
 text-align: center;
 margin: 10px 0;
}
h4{
 text-align: center;
 text-transform: capitalize;
 margin: 0;
}
h5{
 margin: 0;
}
p{
 margin-left: 8px;
 text-transform: capitalize;
 margin: 4px;
}
img{
 max-width:100%;
}
`


export default GlobalStyles;