import Header from './Header';
import styled from 'styled-components';
import palette from '@styles/palette';

const StyledHeader = styled(Header)`
  .header-inner {
    min-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .logo {
      /* font-size: 0; */
    }

    ul {
      display: flex;
      gap: 10px;

      li {
        a {
          font-size: 16px;
          line-height: 64px;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease-out;

          &.on {
            font-weight: bold;
            color: ${palette.yellow.primary};
          }

          &:hover {
            color: ${palette.yellow.primary};
          }
        }
      }
    }

    .user {
      a {
        font-size: 14px;
      }
      ul {
        gap: 15px;
      }
      .register {
        padding: 8px 10px;
        background: ${palette.yellow.primary};
        color: #000;
        border-radius: 6px;
      }
    }
  }
`;

export default StyledHeader;
