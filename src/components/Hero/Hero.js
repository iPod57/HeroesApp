import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

//import batman from '../../assets/dc-batman.jpg' importacion estatica

const heroImages = require.context('../../assets',true)

export const Hero = () => {

    const params = useParams();
    console.log('params: '+JSON.stringify(params));
    
    const navigate = useNavigate();

    const handleReturn = () => {
        //publisher==='Marvel Comics'?navigate('/marvel'):navigate('/dc')
        navigate(-1);
    }

    const {heroId} = params;

    const hero = useMemo( () => getHeroById(heroId),[heroId]);

    //Para no heroe existente de heroe/inexistente
    //Manejo de url a mano mal escrito
    if(!hero) {
        return <Navigate to='/'/>
    }

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
        } = hero;

    const imagePath = `/assets/${id}.jpg`

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={heroImages(`./${id}.jpg`)} 
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
 
// si no se puede mostrar la imagen, va a mandar el texto alternativo alt={}
