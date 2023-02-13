import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    ${({ theme }) => `
      background-color: ${theme.colors.background_900};
    `}
    
    font-family: 'Poppins', sans-serif;
    color: white;

    scroll-behavior: smooth;

    overflow-x: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a{ 
    text-decoration: none !important;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.background_900};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray_600};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }

/* yt embed */

  .yt-lite {
    border-radius: 7px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.08);
  }

  .yt-lite:after{
    background: rgba(14, 16, 21, 0.8) !important;
  }

  .yt-lite>.lty-playbtn{
    background: none !important;
    border: none !important;
  }

  .yt-lite>.lty-playbtn:before{
    border-width: 26px 0 26px 40px !important;
  }

  .yt-lite:hover>.lty-playbtn{
    background: transparent !important;
  }
  
/* swiper */

  .swiper {
    padding-bottom: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.primary_500} !important;
  }

  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    background-color: ${({ theme }) => theme.colors.gray_400} !important;
  }

  .swiper-pagination {
    bottom: 10px !important;
  }

  /* autocomplete input */

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: white;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  [data-rmiz-modal-overlay="visible"] {
    background-color: rgb(0, 0, 0, 0.4);
    backdrop-filter: blur(30px);
}
`

export default GlobalStyle
