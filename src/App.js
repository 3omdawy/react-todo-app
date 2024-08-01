import style from './styles/modules/app.module.scss';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader></AppHeader>
          <AppContent></AppContent>
        </div>
      </div>
      <Toaster toastOptions={{
        position: 'bottom-right',
        style: {
          fontSize: "1.4rem",
        }
      }} />
    </>
  );
}

export default App;
