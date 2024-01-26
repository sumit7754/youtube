import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchLater from './components/WatchLater';
import WatchPage from './components/WatchPage';
import SearchVideos from './components/SearchVideos';
import Meeting from './components/Meeting';
import Welcome from './components/Welcome';
import HistoryVideos from './components/HistoryVideos';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <div className="fixed w-full top-0  bg-white">
          <Header />
        </div>
        <main className=" m-16">
          <Body />
          <Outlet />
        </main>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
      {
        path: '/seachResult',
        element: <SearchVideos />,
      },
      {
        path: '/Live',
        element: <Welcome />,
      },
      {
        path: '/history',
        element: <HistoryVideos />,
      },
      {
        path: '/watchLater',
        element: <WatchLater />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
};

export default App;
