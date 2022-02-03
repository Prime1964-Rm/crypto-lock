import React from "react";
import HomeContainer from "./views/Home/HomeContainer";
import TestAnimation from "./views/TestAnimations";
import { Routes as ReactRoutes, Route,Link } from "react-router-dom";
import DashboardContainer from "./views/dashboard/DashboardContainer";

const Routes = () => {
  return (
    <>
      <ReactRoutes>
        <Route exact path="/" element={<HomeContainer />} />
        {/* <Route path="/exchange"   element={<DashboardContainer />} /> */}
      </ReactRoutes>
      {/* <HomeContainer /> */}
      {/* <TestAnimation/> */}
    </>
  );
};

export default Routes;
