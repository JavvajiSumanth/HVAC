import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import Login from "../views/SignIn";

// todo lazy loading

// import { lazy } from "react";
// import Loadable from "../Helpers/Loadable";
// const Component = Loadable(lazy(() => import("../views/Component")));

export default function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
