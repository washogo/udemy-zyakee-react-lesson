import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./page1Routes";
import { page2Routes } from "./page2Routes";
import { Page2 } from "../Page2";
import { Page1 } from "../Page1";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page1" element={<Page1 />} />
      {page1Routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
      <Route path="page2" element={<Page2 />} />
      {page2Routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
