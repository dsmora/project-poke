import React, { useEffect, useState } from "react";
import Card from './Card';

//create your first component
const Section = () => {

    const [data, setData] = useState([]); // my data is array;
    const [loading, setLoading] = useState(true);

    const fetchData = async (endpoint) => {
        return await fetch(endpoint)
            .then(response => {
                return response.json();
            }).then(response => {
                const results = response.results;
                setData(results);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchData('https://pokeapi.co/api/v2/pokemon/');
    }, []);

    const onHandleDelete = (pokemon) => {
        setData(data.filter(item => item.name !== pokemon.name));
    }

    if (loading) return <h3>Loading</h3>;

    return (
        <div className="row">
            {
                data.map((item) => (
                    <Card key={`${item.name}`} pokemon={item} onDelete={onHandleDelete} />
                ))
            }
        </div>
    );
};

export default Section;
