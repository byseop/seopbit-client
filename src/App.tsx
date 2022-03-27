import useInit from '@utils/hooks/useInit';
import MainRoutes from '@routes/MainRoutes';
import GlobalStyles from './globalStyle';

function App() {
  useInit();

  return (
    <>
      <GlobalStyles />
      <div id="seopbit">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
