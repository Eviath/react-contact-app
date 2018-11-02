import React from 'react'
import { Icon } from 'semantic-ui-react'
import ContactForm from './contactForm.jsx';
import { List } from 'semantic-ui-react'
import './index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ContactsList extends React.Component {

 
 constructor(){
  super();


  this.state = {

      contacts: [],
      contact: {title:'', content:'', key:'', id:''},

      showComp: false

  }

}

handleClick = () => {
  this.setState({
     showComp: true,
 })
}

handleChange = (event) => {

  const name = event.target.name;
  const value = event.target.value;
  const { contact } = this.state;
  const keyval = Date.now();
  const newContact = {
    ...contact,
    [name]: value,
    key: keyval,
  };

  this.setState({ contact: newContact });

}


deleteItem = key => {

  const filteredItems = this.state.contacts.filter(contact => {
    return contact.id !== key

  })

  this.setState({
    contacts: filteredItems,
  })
}


addItem = (event) => {
  const contact = this.state.contact;
  const contacts = this.state.contacts;
  const newContacts = Array.from(contacts);
  newContacts.push(contact);
  const keyval = Date.now();
  this.setState({
    contacts: newContacts,
    contact: {id: keyval}
  });
  console.log(contact)
  event.preventDefault();
};



render(){

  const { showComp } = this.state;


  const Contact = contact => {
    const imgUrl = `https://api.adorable.io/avatars/55/typeofweb3.png`;
    
      return   <List.Item key={contact.id} onClick={() => this.deleteItem(contact.id)} >
        <img alt="smng" src={imgUrl} className="ui mini rounded image" />
        <List.Content>
          <h4 className="header">{contact.title}</h4>
          <div className="description">{contact.content}</div>
        </List.Content>
        </List.Item>
 
    }

  const contacts = this.state.contacts.map(contact => {
    return (


      
      <Contact 
      key={contact.key}
        {...contact}
        // category={post.category}
      />



    );
  });

  const contactsLength =  this.state.contacts.length;
  
  
      return (
  
   <div>
  
          <header className="ui menu">
          <nav className="ui container">
            <a href="#" className="header item">
  
             <Icon name='address card outline' />
              Lista kontaktów {contactsLength}
            </a>
            <div className="header item">
              <button onClick={this.handleClick} className="ui button">Dodaj</button>
            </div>
         
          </nav>
        </header>
     {showComp && <ContactForm 
            addItem={this.addItem}
            handleChange={this.handleChange}
          />}
  
  
      
          <List animated selection divided relaxed> 
 
          {contacts}
      
     
          
          
          </List>

     </div>
  
  
        );
  
      }


  }