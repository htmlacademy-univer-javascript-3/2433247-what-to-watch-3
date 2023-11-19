import FourOhFour from '../pages/404/404';
import Main from '../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import SignIn from '../pages/sign-in/sign-in';

import RoutePath from './route-path';
import ProtectedRoute from '../components/protected-route/protected-route';
import AuthStatus from '../types/auth-status';
import MyList from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import Media from '../pages/media/media';
import AddReview from '../pages/add-review/add-review';
import { mediaList } from '../mocks/films';

export const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.Main} element={<Layout />}>
        <Route index element={<Main mediaList={mediaList} />} />
        <Route path={RoutePath.Login} element={<SignIn />} />
        <Route
          path={RoutePath.MyList}
          element={
            <ProtectedRoute authStatus={AuthStatus.Authorized}>
              <MyList mediaList={mediaList} />
            </ProtectedRoute>
          }
        />
        {/* <Route path={RoutePath.Player} element={<Player />} /> */}
        <Route index element={<FourOhFour />} />
        <Route path={RoutePath.Film} >
          <Route index element={<Media list={mediaList}/>}/>
        </Route>
        <Route path={RoutePath.Player} >
          <Route index element={<Player list={mediaList}/>}/>
        </Route>
        <Route path={RoutePath.FilmReview} element={<AddReview list={mediaList}/>} />
        <Route path={RoutePath.NotFound} element={<FourOhFour />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
