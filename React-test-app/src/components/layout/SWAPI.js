import React, {useState, useEffect} from 'react';
import {get} from 'lodash';

const Swapi = () => {
    const [hasError, setErrors] = useState(false);
    const [species, setSpecies] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await fetch('https://swapi.co/api/species');
        res
            .json()
            .then(res => setSpecies(res))
            .catch(err => setErrors(err));
    }

    const specification = get(species, 'results[3]');

    return (
        <section>
            {species.results && hasError === false ?
                <React.Fragment>
                    <ul>
                        {species.results.map(species => <li key={species.name}>species name: {species.name} </li>)}
                    </ul>
                    <ul>
                        <li>class: {specification.classification}, of species: {specification.name}</li>
                    </ul>
                </React.Fragment> :
                <React.Fragment>
                    {hasError !== false ?
                        <span>ERROR</span> :
                        <span>Loading</span>
                    }
                </React.Fragment>
            }
        </section>
    );
};

export default Swapi;