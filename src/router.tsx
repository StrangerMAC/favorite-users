import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Favorite, usersLoader } from './pages/Favorite';
import { PageNotFound } from './pages/PageNotFound';
import { Users } from './pages/Users';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="users" element={<Users />} />
      <Route path="favorite" element={<Favorite />} loader={usersLoader} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
