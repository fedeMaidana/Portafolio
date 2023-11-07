import { initializeDropdown } from "./openDropdown.js"
import { AboutMe } from "../components/AboutMe.js"
import { Services } from "../components/Services.js"
import { Portfolio } from "../components/Portfolio.js"
import { Contact } from "../components/Contact.js"

const buttons = Array.from( document.querySelectorAll( '.item button' ) )
const mainContent = document.querySelector( '#main' )

const contentFunctions = {
    about: AboutMe,
    services: Services,
    portfolio: Portfolio,
    contact: Contact
}

mainContent.innerHTML = await contentFunctions.about()

for( let i = 0; i < buttons.length; i++ ){
    buttons[ i ].addEventListener( 'click', async () => {
        const targetContent = buttons[ i ].getAttribute( 'data-content' )

        if( contentFunctions[ targetContent ] ) mainContent.innerHTML = await contentFunctions[ targetContent ]()
        
        initializeDropdown()
    } )
}

initializeDropdown()