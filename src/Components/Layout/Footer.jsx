import gitLogo from "../../images/github-mark.png";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © 2020 Copyright:&nbsp;
        <a
          className="text-dark"
          href="https://github.com/gustavocarvalho1002/contact-list-react-app"
        >
          Gustavo Carvalho <img src={gitLogo} style={{ height: "20px" }}></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
