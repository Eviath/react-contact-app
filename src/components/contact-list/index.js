import React from 'react'
import { Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import './index.css';
import { Button, Form, Message } from 'semantic-ui-react'

export default class ContactsList extends React.Component {

 
 constructor(){
  super();


  this.state = {
      contacts: [],
      contact: {title:'', content:'', key:'', id:''},
      showComp: false,
      errors: [],
  }

}


// form validation
handleValidation(){
  let contact = this.state.contact;
  let errors = {};
  let formIsValid = true;

  //title validation
  if(!contact["title"]){
     formIsValid = false;
     errors["title"] = "Nazwa nie może być pusta.";
  }

  if(typeof contact["title"] !== "undefined"){
     if(!contact["title"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["title"] = "W nazwie mogą być tylko litery.";
     }        
  }

// content validation
  if(!contact["content"]){
    formIsValid = false;
    errors["content"] = "Kontakt nie może być pusty.";
 }

  // push errors to state
 this.setState({errors: errors});

//  return if formvalidation is true or false
 return formIsValid;
}



// show form component on button click "DODAJ"
handleClick = () => {
  this.setState({
     showComp: true,
 })
}


// event on input change
handleChange = (event) => {
 
  // validate form on input change
  this.handleValidation()
  
  // watch input change and push new contact to state
  const name = event.target.name;
  const value = event.target.value;
  const { contact } = this.state;
  const keyval = Date.now();
  const newContact = {
    ...contact,
    [name]: value,
    key: keyval,
  };

  // set input as contact state
  this.setState({ contact: newContact });
}


// contact delete on click
deleteItem = key => {
  // check every contact for id, return only contacts that do not have id the same as clicked element.
  const filteredItems = this.state.contacts.filter(contact => {
    return contact.id !== key
  })

  this.setState({
    contacts: filteredItems,
  })
}


// form submit
addItem = (event) => {

  if(this.handleValidation()){

    // submit form on successfull validation
    const contact = this.state.contact;
    const contacts = this.state.contacts;
    const newContacts = Array.from(contacts);
    const keyval = Date.now();
    newContacts.push(contact);
    this.setState({
      contacts: newContacts,
      contact: {id: keyval}
    });

    event.preventDefault();
    event.target.reset();


 }else{
  
    // validation not successfull, stop form submit
    event.preventDefault();

 }

    
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
      />
 


    );
  });

  // return contacts array length // number of contacts
  const contactsLength =  this.state.contacts.length;

     const stateTitle = this.state.errors.title;
     const stateContent = this.state.errors.content;

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
         
        

        {showComp === true && 
                  <div className="contact">
                    <div className="header">

                        <Form error onSubmit={this.addItem}>
                            <Form.Field>

                            {stateTitle  && 
                            <Message
                              error
                              header='Nazwa'
                              content={stateTitle}
                            />}

                            <label>Nazwa</label>
                            <Form.Input
                              error={stateTitle}
                              placeholder="Nazwa"
                              type="text"
                              name="title"
                              onChange={this.handleChange}/> 
                            </Form.Field>
                            <Form.Field>

                            {stateContent  && 
                            <Message
                              error={stateContent}
                              header='Kontakt'
                              content={stateContent}
                            />}

                            <label>Kontakt</label>
                            <input
                              placeholder="Kontakt"
                              type="text"
                              name="content"
                              onChange={this.handleChange}/>
                            </Form.Field>
                            
                            <Button type='submit'>Zapisz</Button>
                        </Form>

                    </div>
                </div>
}

      
          <List animated selection divided relaxed> 
    
          {contacts}
      
     
          
          
          </List>

     </div>
  
  
        );
  
      }


  }