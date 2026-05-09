import { Navigate, Route, Routes } from "react-router-dom";
import { ContentProvider } from "../content/contentContext.jsx";
import Layout from "../components/Layout";
import About from "../pages/About";
import AdminRedirect from "../pages/AdminRedirect";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import DestinationPage from "../pages/DestinationPage";
import DestinationsIndex from "../pages/DestinationsIndex";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";
import Team from "../pages/Team";

export default function App() {
  return (
    <ContentProvider>
      <Routes>
        <Route path="admin" element={<AdminRedirect />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="flights" element={<ServicePage slug="flights" />} />
          <Route path="visa-services" element={<ServicePage slug="visa-services" />} />
          <Route path="cruise-tours" element={<ServicePage slug="cruise-tours" />} />
          <Route path="corporate-travel" element={<ServicePage slug="corporate-travel" />} />
          <Route path="honeymoon-tours" element={<ServicePage slug="honeymoon-tours" />} />
          <Route path="careers" element={<Careers />} />
          <Route path="our-team" element={<Team />} />
          <Route path="destinations" element={<DestinationsIndex />} />
          <Route path="destinations/:slug" element={<DestinationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ContentProvider>
  );
}
