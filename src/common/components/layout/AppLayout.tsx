import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <div>
        <header>Header</header>
      </div>
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
