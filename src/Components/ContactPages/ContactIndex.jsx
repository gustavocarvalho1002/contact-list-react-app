import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [
        {
          id: 1,
          name: "Gustavo Carvalho",
          phone: "123-546-123",
          email: "gustavo@email.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Daniel Carvalho",
          phone: "123-546-123",
          email: "daniel@email.com",
          isFavorite: true,
        },
        {
          id: 1,
          name: "Maria das Graças Carvalho",
          phone: "123-546-123",
          email: "maria@email.com",
          isFavorite: true,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    //Check if contact's name and phone is empty
    if (newContact.name == "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }

    //Check if contact is duplicated
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    //After validation, adding contact to the state
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="offset-2 col-4">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="col-4">
              <RemoveAllContacts></RemoveAllContacts>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <AddContact handleAddContact={this.handleAddContact}></AddContact>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <FavoriteContacts
                contacts={this.state.contactList.filter(
                  (x) => x.isFavorite == true
                )}
              ></FavoriteContacts>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (x) => x.isFavorite == false
                )}
              ></GeneralContacts>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;
