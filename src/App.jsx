import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './components/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ContactForm from './components/ContactForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/#contact" element={<ContactForm />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
