import styled from 'styled-components';
import HomeTable from './HomeTable';
import palette from '@src/styles/palette';

const StyledHomeTable = styled(HomeTable)`
  position: relative;
  width: 100vw;
  transform: translateX(calc((100vw - 1200px) / -2));
  background: ${palette.black.secondary};
  border-radius: 32px 32px 0 0;
  padding-bottom: 30px;

  .table-inner {
    width: 1200px;
    margin: auto;
    height: 100%;
    padding: 0 14px;
    box-sizing: border-box;

    ul {
      display: flex;
      gap: 14px;

      li {
        padding: 14px 0;
        button {
          font-size: 14px;
          background: transparent;
          border: none;
          color: ${palette.grey.primary};
          cursor: pointer;
          padding: 12px 16px;
          border-radius: 4px;

          &[disabled] {
            cursor: not-allowed;
            /* pointer-events: none; */
          }
        }

        &.active button {
          color: #f0b90b;
          background: #3c2601;
          font-weight: bold;
        }
      }
    }
  }

  .table-wrap {
    margin-top: 20px;

    .table-row {
      display: flex;
      gap: 20px;
      font-size: 16px;
      border-bottom: 1px solid #474d57;

      &:last-child {
        border: none;
      }
    }

    .table-col {
      padding: 0 10px;
      display: flex;
      gap: 12px;
      align-items: center;
      height: 64px;

      &.t-l {
        text-align: left;
        justify-content: flex-start;
      }
      &.t-r {
        text-align: right;
        justify-content: flex-end;
      }

      &.name {
        width: 240px;
      }

      &.price {
        width: 132px;
      }

      &.change {
        width: 132px;
      }

      &.volume {
        width: 172px;

        i {
          font-size: 12px;
        }
      }

      &.highest {
        flex: 1;
        padding-left: 50px;
      }

      .logo {
        width: 32px;
        height: 32px;

        img {
          display: block;
          width: 100%;
        }
      }

      .code {
        font-weight: bold;
        color: #eaecef;
      }

      .name {
        color: #848e9c;
        font-size: 14px;
      }
    }

    .table-header {
      font-size: 12px;
      border-radius: 4px 4px 0 0;
      background: #0b0e11;
      padding: 12px 0;
      border: none;

      .table-col {
        height: auto;
      }
    }
  }
`;

export default StyledHomeTable;
