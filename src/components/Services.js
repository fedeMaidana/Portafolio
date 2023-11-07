export const Services = async () => {
    try {
        const response = await fetch( 'src/json/services.json' )
        const { services } = await response.json()

        const view = /* html */ `
            <section class='services-container'>
                ${ services.map( ( service, index ) => {

                    const isLast = index === services.length - 1

                    return /* html */ `
                        <article class='design-service ${ index % 2 === 0 ? 'right' : '' } ${ isLast ? 'last-project' : '' }'>
                            <header class='services-header'>
                                <img src='${ service.icon }' alt='${ service.alt }' class='services-img' />
                                <h3 class='services-header__title'>${ service.title }</h3>
                            </header>
                            <ul class='services-items-container'>
                                ${ service.description.map( desc => {
                                    return /* html */ `
                                        <li class='services-item'>${ desc }</li>
                                    `
                                }).join( '' )}
                            </ul>
                        </article>
                    `
                }).join( '' )}
            </section>
        `

        return view

    }catch( error ){
        console.error( 'Error al cargar el archivo JSON', error )
    }
}