import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2 border border-4 border-secondary-subtle"
      style={{ borderRadius: "20px" }}
    >
      <div className="text-center">Other Contacts</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
