

import React from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class ContactForm extends React.Component {
 
  render() {
return (
<div className="contact">
<div className="header">

 <Form onSubmit={this.props.addItem}>
    <Form.Field>
      <label>Nazwa</label>
      <input
              placeholder="Nazwa"
              type="text"
              name="title"
              onChange={this.props.handleChange}
            />
    </Form.Field>
    <Form.Field>
      <label>Kontakt</label>
      <input
              placeholder="Kontakt"
              type="text"
              name="content"
              onChange={this.props.handleChange}
            />
    </Form.Field>
    <Button type='submit'>Zapisz</Button>
  </Form>

</div>
</div>

)
  }
}