import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './constant';

export default function MainRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
