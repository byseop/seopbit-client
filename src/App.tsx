import useInit from '@utils/hooks/useInit';
import MainRoutes from '@routes/MainRoutes';

function App() {
  useInit();

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
