const Contact = (props) => {
  return (
    <div>
      <div
        className="row p-md-2 mb-2 border"
        style={{
          borderRadius: "20px",
        }}
      >
        <div className="col-2 col-md-1 pt-2 pt-md-1">
          <img
            src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
            style={{ width: "80%" }}
            alt=""
          />
        </div>
        <div className="col-6 col-md-5 pt-0">
          <span className="h4">{props.contact.name}</span>
          <br />
          <div>
            {props.contact.email}
            <br />
            {props.contact.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
