import ReactDOM from "react-dom/client";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <div className="container" style={{ minHeight: "400px" }}></div>
    <Footer></Footer>
  </div>
);
