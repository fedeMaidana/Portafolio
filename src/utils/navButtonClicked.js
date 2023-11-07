document.addEventListener( 'DOMContentLoaded', () => {
    const buttons = document.querySelectorAll( '.item button' )

    buttons[ 0 ].classList.add( 'clicked' )

    for( let i = 0; i < buttons.length; i++ ){
        buttons[ i ].addEventListener( 'click', handleButtonClick )
        buttons[ i ].addEventListener( 'touchstart', handleButtonClick )
    }

    function handleButtonClick(){
        for( let i = 0; i < buttons.length; i++ ){
            buttons[ i ].classList.toggle( 'clicked', buttons[ i ] === this )
        }
    }
})