import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      sucessMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();

    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (response.status == "success") {
      this.setState({ errorMessage: undefined, sucessMessage: response.msg });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({ errorMessage: response.msg, sucessMessage: undefined });
    }
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className="row p-2">
            <div className="col-12 text-white-50">Add New Contact</div>

            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
              ></input>
            </div>

            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
              ></input>
            </div>

            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
              ></input>
            </div>

            {this.state.errorMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-danger text-center">
                {this.state.errorMessage}
              </div>
            )}

            {this.state.sucessMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-success text-center">
                {this.state.sucessMessage}
              </div>
            )}

            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
