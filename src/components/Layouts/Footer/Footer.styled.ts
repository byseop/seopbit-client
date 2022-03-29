import Footer from './Footer';
import styled from 'styled-components';
import palette from '@styles/palette';

const StyledFooter = styled(Footer)`
  color: ${palette.grey.primary};
  font-size: 12px;
  background: ${palette.black.secondary};
  .footer-inner {
    margin: auto;
    padding: 30px 0;
    border-top: 1px solid ${palette.grey.primary};
    max-width: 1200px;
    text-align: center;
  }
`;

export default StyledFooter;
