import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Registerpage from "./Components/Registerpage";
import Signupform from "./Components/Signupform";
import Notfound from "./Components/Notfound";
import Forgetpass from "./Components/Forgetpass";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/forget" element={<Forgetpass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    // <Notfound/>
  );
}

export default App;
