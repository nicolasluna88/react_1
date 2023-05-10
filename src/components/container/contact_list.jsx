import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../../models/contact.class'
import ContactComponent from '../pure/contact'


const ContactListComponent = (props) => {

    const defaultContact = new Contact('Example name', 'Example lastname', 'example@example.com',false)

  return (
    <div>
        <div>
            Your Contact:
        </div>
        {/*aplicar un for/map para renderizar una lista*/}
        <ContactComponent contact = {defaultContact}></ContactComponent>
    </div>
  )
}


export default ContactListComponent
