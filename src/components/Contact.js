export const Contact = async () => {
    try {
        const responseGreetings = await fetch( '../src/json/greetings.json' )
        const { greetings } = await responseGreetings.json()

        const responseSocialNetworks = await fetch( '../src/json/socialNetworks.json' )
        const { socialNetworks } = await responseSocialNetworks.json()

        const view = /* html */ `
            <section class='contact'>
                ${ greetings.map( ( greeting, index ) => {
                    return /* html */ `
                        <article class='greeting ${ index % 2 === 0 ? 'right' : '' }'>
                            <p>${ greeting }</p>
                        </article>
                    `
                }).join( '' )}
                <ul class='container-social-network'>
                    ${ socialNetworks.map( socialNetwork => {
                        return /* html */ `
                            <li>
                                <a href='${ socialNetwork.link }' target='_blank'>
                                    <img src='${ socialNetwork.img }' alt='${ socialNetwork.name }' />
                                    <p>${ socialNetwork.name }</p>
                                </a>
                            </li>
                        `
                    }).join( '' )}
                </ul>
            </section>
        `

    return view

    }catch( error ){
        console.error( 'Error al cargar el archivo JSON', error )   
    }
}