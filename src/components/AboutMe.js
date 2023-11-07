export const AboutMe = async () => {
    try {
        const requestOptions = {
            headers: new Headers({
                'Content-Type': 'applications/json',
                'Access-Control-Allow-Origin': '*'
            })
        }

        const responseAbout = await fetch( 'src/json/aboutMe.json', requestOptions )
        const { info } = await responseAbout.json()

        const responseSkills1 = await fetch( 'src/json/skills1.json', requestOptions )
        const { skills1 } = await responseSkills1.json()

        const responseSkills2 = await fetch( 'src/json/skills2.json', requestOptions )
        const { skills2 } = await responseSkills2.json()

        const responseDiplomas = await fetch( 'src/json/diplomas.json', requestOptions )
        const { diplomas } = await responseDiplomas.json()
        
        const view = /* html */ `
            <section class='about'>
                ${ info.map( ( data, index ) => {
                    return /* html */ `
                        <article class='about__card about__card--1 ${ index % 2 === 0 ? 'right' : '' }'>
                            <p>${ data }</p>
                        </article>
                    `
                }).join( '' )}
                <div class='slider-container'>
                    <div class='slider'>
                        ${ skills1.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                    <div class='slider'>
                        ${ skills1.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                    <div class='slider'>
                        ${ skills1.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                </div>
                <div class='slider-container-2'>
                    <div class='slider-2'>
                        ${ skills2.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                    <div class='slider-2'>
                        ${ skills2.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                    <div class='slider-2'>
                        ${ skills2.map( skill => {
                            return /* html */ `
                                <span class='skill-container'>
                                    <img src='${ skill.img }' alt='${ skill.name }' class='skill' />
                                    <p class='skill__title'>${ skill.name }</p>
                                </span>
                            `
                        }).join( '' )}
                    </div>
                </div>
                <div class='dropdown-container'>
                    <div class='dropdown'>
                        <span>Certificados</span>
                        <div class='caret'></div>
                    </div>
                    <ul class='dropdown-menu'>
                        ${ diplomas.map( diploma => {
                            return /* html */ `
                                <li class='dropdown-menu__item'>
                                    <img src='${ diploma.img }' alt='${ diploma.alt }'/>
                                </li>
                            `
                        }).join( '' )}
                    </ul>
                </div>
            </section>
        `
    
        return view
        
    }catch( error ){
        console.error( 'Error al cargar el archivo JSON', error )
    }
}