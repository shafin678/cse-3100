import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/contactus'; // Import the ContactUs component
import AboutUs from './views/aboutus'; // Import the AboutUs component

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact'} element={<ContactUs />} />
        <Route path={'/about'} element={<AboutUs />} /> {/* Add AboutUs page */}
      </Route>
    </Routes>
  );
}

export default App;
