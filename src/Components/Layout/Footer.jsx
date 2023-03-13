import gitLogo from "../../images/github-mark.png";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        borderTop: "1px solid #555",
        textAlign: "center",
      }}
    >
      © 2023 Copyright:&nbsp;
      <a
        className="text-dark"
        href="https://github.com/gustavocarvalho1002/contact-list-react-app"
      >
        Gustavo Carvalho <img src={gitLogo} style={{ height: "20px" }}></img>
      </a>
    </div>
  );
};

export default Footer;
