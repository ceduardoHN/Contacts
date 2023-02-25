import React,{useState} from "react";
import {v4 as uuid} from "uuid";
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  const removeContactHandler=(id)=>{
      const newContactList=contacts.filter((contact)=>{
          return contact.id!==id;
      });
      setContacts(newContactList);
  }

  return(
    <div className="ui container">
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList contacts={contacts} removeContact={removeContactHandler}></ContactList>
    </div>
  );
}

export default App;
