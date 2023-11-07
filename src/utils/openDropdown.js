export function initializeDropdown(){
    const caret = document.querySelector( '.caret' )
    const dropdownMenu = document.querySelector( '.dropdown-menu' )
    
    document.body.addEventListener( 'click', ( event ) => {
        const tagName = event.target.tagName

        if( [ 'DIV', 'SPAN' ].includes( tagName ) ){
            caret.classList.toggle( 'caret-rotate' )
            dropdownMenu.classList.toggle( 'dropdown-menu--open' )
        }
    })
}