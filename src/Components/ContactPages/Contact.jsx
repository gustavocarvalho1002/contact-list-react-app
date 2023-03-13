const Contact = (props) => {
  return (
    <div>
      <div
        className="row p-md-2 mb-2 border border-1 "
        style={{
          borderRadius: "20px",
        }}
      >
        <div className="col-2 col-md-2 pt-2 pt-md-1">
          <img
            src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
            style={{ width: "80%" }}
            alt=""
          />
        </div>
        <div className="col-6 col-md-5 pt-0">
          <span className="h6">{props.contact.name}</span>
          <br />
          <div>
            {props.contact.email}
            <br />
            {props.contact.phone}
          </div>
        </div>
        <div className="col-2 col-md-2 pt-md-3">
          <button
            className={`btn btn-sm m-1 ${
              props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
            }`}
          >
            <i className="bi bi-star" style={{ font: "1rem" }}></i>
          </button>
        </div>
        <div className="col-2 col-md-3 pt-md-3">
          <button className="btn btn-primary btn-sm m-1">
            <i className="bi bi-pencil-square" style={{ font: "1rem" }}></i>
          </button>
          <button className="btn btn-danger btn-sm m-1">
            <i className="bi bi-trash-fill" style={{ font: "1rem" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
