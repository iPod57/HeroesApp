import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../Hero/HeroCard';
import queryString from 'query-string'

export const SearchScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const {q=''} = queryString.parse(location.search);
    
    //location.search muestra ?=batman y el q solo el batman

    const [{searchText},handleInputChange] = useForm({
        searchText: q
    });
    
    const heroesFiltered = useMemo(() => getHeroesByName(q),[q]);

    const handleSearch = (e) => {
        
        e.preventDefault();
        //console.log(searchText);
        navigate(`?q=${searchText}`)

    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='Buscar un heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={searchText}
                        />

                        <button
                            className='btn btn-outline-primary mt-1 col-12'
                            type='submit'
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultado</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un heroe</div>
                            : (heroesFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados de: {q}</div>
                    }

                    {
                        heroesFiltered.map(h => (
                            <HeroCard 
                                key={h.id}{...h}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
