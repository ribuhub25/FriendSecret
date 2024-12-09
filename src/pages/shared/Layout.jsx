import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

export default function Layout({children}) {
    return (
      <>
        <Header></Header>
        {children}
        <Footer></Footer>
      </>
    );
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};