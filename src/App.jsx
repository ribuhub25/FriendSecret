import { Home } from "./pages/Auth/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Auth/Profile";
import Friendsecret from "./pages/Friendsecret";
import Layout from "./pages/shared/Layout";
import "material-icons/iconfont/material-icons.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./App.css";
import { useEffect } from "react";
import Sorts from "./pages/Sorts";
import Wishlist from "./pages/Wishlist";
function App() {
  // const { isAuthenticated} = useAuth0();
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.location.href = "/profile";
  //   }
  // }, [isAuthenticated]);

  useEffect(() => {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      //var instances = M.Datepicker.init(elems, options);
      M.Datepicker.init(elems);
    });
  }, []);
  return (
    <Layout>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/friend-secret" element={<Friendsecret />} />
          <Route exact path="/sorts" element={<Sorts />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
