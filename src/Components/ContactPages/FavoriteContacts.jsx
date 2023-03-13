import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div
      className="col-12 py-2 border border-4 border-secundary-subtle"
      style={{ borderRadius: "20px" }}
    >
      <div className="text-center">Favorites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
