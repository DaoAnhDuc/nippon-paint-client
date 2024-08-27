import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import HomePage from '../page/HomePage';
import HomePage2 from '../page/HomePage2';
import HomePage3 from '../page/HomePage3';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/2'} element={<HomePage2 />} />
      <Route path={'/3'} element={<HomePage3 />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
