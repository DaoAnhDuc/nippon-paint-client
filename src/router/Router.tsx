import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import HomePage from '../page/HomePage';
import HomePage2 from '../page/HomePage2';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/2'} element={<HomePage2 />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
