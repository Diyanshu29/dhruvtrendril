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
import Imgprofile from "./Components/Imgprofile";
import Expricenceprofile from "./Components/Expricenceprofile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/forget" element={<Forgetpass />} />
        <Route path="/pro" element={<Imgprofile />} />
        <Route path="/exp" element={<Expricenceprofile />} />
        <Route path="/profile" element={<Profile  uname="dhruv gajjar"/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    // <Notfound/>
  );
}

export default App;
