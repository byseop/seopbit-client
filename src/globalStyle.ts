import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import palette from '@styles/palette';

const GlobalStyles = createGlobalStyle`
  ${reset};

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${palette.white.primary};
    background: ${palette.black.primary}
  }

  .color-RISE {
    color: #0ECB81
  }
  .color-FALL {
    color: #F6465D
  }
`;

export default GlobalStyles;
