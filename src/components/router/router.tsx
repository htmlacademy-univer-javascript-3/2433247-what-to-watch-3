import FourOhFour from '../../pages/404/404';
import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import SignIn from '../../pages/sign-in/sign-in';

import { mediaList } from '../../const';
import RoutePath from './route-path';
import ProtectedRoute from '../protected-route/protected-route';
import AuthStatus from '../../types/auth-status';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import Media from '../../pages/media/media';
import AddReview from '../../pages/add-review/add-review';

export const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.Main} element={<Layout />}>
        <Route index element={<Main mediaList={mediaList} />} />
        <Route path={RoutePath.Login} element={<SignIn />} />
        <Route
          path={RoutePath.MyList}
          element={
            <ProtectedRoute authStatus={AuthStatus.Unauthorized}>
              <MyList />
            </ProtectedRoute>
          }
        />
        <Route path={RoutePath.Player} element={<Player />} />
        <Route path={RoutePath.Films}>
          <Route path={RoutePath.Film} element={<Media />} />
          <Route
            path={RoutePath.FilmReview}
            element={
              <AddReview />
            }
          />
        </Route>
        <Route path={RoutePath.NotFound} element={<FourOhFour />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
