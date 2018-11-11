import React from 'react'
import { Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import './index.css';
import { Button, Form, Label } from 'semantic-ui-react'

export default class ContactsList extends React.Component {

 
 constructor(){
  super();


  this.state = {
      contacts: [{
        title: 'Jacek',
        content: '732011132',
        key: '234235235325',
        id: '325325235324',
        img: 'https://api.adorable.io/avatars/55/typeofweb1.png'
      },
    {
      title: 'Anna',
        content: '462342533',
        key: '23423423325',
        id: '325342342235324',
        img: 'https://api.adorable.io/avatars/55/typeofweb2.png'
    },
    {
      title: 'Marcin',
        content: 'gmail@gmail.com',
        key: '2342233423325',
        id: '3253423232342235324',
        img: 'https://api.adorable.io/avatars/55/typeofweb3.png'
    },
    {
      title: 'Daniel',
        content: 'daniel#2324',
        key: '2342637323423325',
        id: '3253454542342235324',
        img: 'https://api.adorable.io/avatars/55/typeofweb4.png'
    }],

      contact: {title:'', content:'', key:'', id:'', img:'', createdAt: ''},
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
handleCompShow = () => {
  this.setState({
     showComp: true,
 })
}

// hide form component on button click "Lista Kontaktów"
handleCompHide = () => {
  this.setState({
     showComp: false,
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

  const randomNum = Math.floor((Math.random() * 100) + 1);;
  const newContact = {
    ...contact,
    [name]: value,
    key: keyval,
    id: keyval,
    img: `https://api.adorable.io/avatars/55/typeofweb${randomNum}.png`,
  };


  // set input as contact state
  this.setState({ contact: newContact });


}


addDate(){
  const time = new Date().toLocaleDateString();
  const date = new Date().toLocaleTimeString();


  this.setState({
    contact: {createdAt: `${time} ${date}`},
  });
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

  this.addDate()

  if(this.handleValidation()){


    // submit form on successfull validation
    const contact = this.state.contact;
    const contacts = this.state.contacts;

    const newContacts = Array.from(contacts);

    newContacts.push(contact);

    this.setState({
      ...contacts,
      contacts: newContacts,
    });


    event.preventDefault();
 

console.log(contact)
 }else{
  
    // validation not successfull, stop form submit
    event.preventDefault();

 }

    
};



render(){

  const { showComp } = this.state;
 

  const Contact = contact => {
    
      return   <List.Item key={contact.id} onClick={() => this.deleteItem(contact.id)} >
        <img alt="smng" src={contact.img} className="ui mini rounded image" />
        <List.Content>
          <h4 className="header">{contact.title}</h4>
          <h4 className="header">{contact.createdAt}</h4>
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

            <a onClick={this.handleCompHide} href="#" className="header item">
             <Icon name='address card outline' />
              Lista kontaktów    
            </a>

            <div className="header  item">
            <a>
              <Label >
              <Icon name='address card outline' />
                {contactsLength}
              </Label>
            </a>
            </div>

            <div className="header right item">
              <button onClick={this.handleCompShow} className="ui button">Dodaj</button>
            </div>

          </nav>
        </header>
         
        

        {showComp === true && 
                  <div className="contact">
                    <div className="header">

                        <Form error onSubmit={this.addItem}>
                            <Form.Field>

                            <label>Nazwa</label>
                            
                            <Form.Input
                              placeholder="Nazwa"
                              type="text"
                              name="title"
                              value={this.state.contact.title}
                              onChange={this.handleChange}/> 
                              {stateTitle  && 
                             <Label pointing>{stateTitle}</Label>}
                            </Form.Field>
                            <Form.Field>

                            <label>Kontakt</label>

                            <Form.Input
                              placeholder="Kontakt"
                              type="text"
                              name="content"
                              value={this.state.contact.content}
                              onChange={this.handleChange}/>
                               {stateContent  && 
                              <Label pointing>{stateContent}</Label>}
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