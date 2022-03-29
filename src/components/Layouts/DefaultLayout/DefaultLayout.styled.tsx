import DefaultLayout from './DefaultLayout';
import styled from 'styled-components';

const StyledDefaultLayout = styled(DefaultLayout)`
  .main-section {
    max-width: 1200px;
    min-height: calc(100vh - 103px - 64px);
    margin: auto;
  }
`;

export default StyledDefaultLayout;
