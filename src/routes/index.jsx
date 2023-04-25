import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "screens/About";
import GlobalStatistic from "screens/GlobalStatistic";
import LiveByCountry from "screens/LiveByCountry";
import NotFound from "screens/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalStatistic />} />
      <Route path="/live_by_country" element={<LiveByCountry />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  );
}
