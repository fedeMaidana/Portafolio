export const Portfolio = async () => {
    try {
        const response = await fetch( 'src/json/projects.json' )
        const { projects } = await response.json()

        const view = /* html */ `
            <section class="portfolio-container">
                ${ projects.map( ( yearData, index ) => {
                    return /* html */ `
                        <span class='year-container'>
                            <p class='year'>${ yearData.year }</p>
                        </span>
                        ${ yearData.project.map( ( pjt, index2 ) => {

                            const isLast = index2 === yearData.project.length - 1

                            return /* html */ `
                                <div class='portfolio__proyect ${ index % 2 === 0 || index2 % 2 !== 0 ? 'portfolio__proyect--right' : '' }'>
                                    <article class='timeline__proyect ${ isLast ? 'last-project' : '' }'>
                                        <header class='proyect-header'>
                                            <img src='${ pjt.img }' alt='Imagen del proyecto' class='proyect__img' />
                                        </header>
                                        <div class='proyect-info'>
                                            <h3 class='proyect-info__title'>${ pjt.title }</h3>
                                            <p class='proyect-info__description'>${ pjt.description }</p>
                                            <ul class='proyect-links'>
                                                <li>
                                                    <img src='src/assets/icons/link.svg' alt='link' class='proyect-link__img'/>
                                                    <a href='${ pjt.deploy }' target='blank'>Deploy</a>
                                                </li>
                                                <li>
                                                    <img src='src/assets/icons/link.svg' alt='link' class='proyect-link__img'/>
                                                    <a href='${ pjt.repository }' target='blank'>Repositorio</a>
                                                </li>
                                            </ul>
                                            <ul class='proyect-info__hashtagContainer'>
                                                ${ pjt.hashtag.map( tag => {
                                                    return /* html */`
                                                        <li class='proyect-info__hashtag'>${ tag }</li> 
                                                    `
                                                }).join( '' )}
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            `
                        }).join( '' )}
                    `
                }).join( '' )}
            </section>
        `

        return view
        
    }catch( error ){
        console.error( 'Error al cargar el archivo JSON', error )
    }
}