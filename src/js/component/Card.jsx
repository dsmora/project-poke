import React, { useEffect, useState } from "react";


const Card = (props) => {
    const { pokemon, onDelete } = props;

    const [data, setData] = useState(pokemon);
    const [loading, setLoading] = useState(true);

    const fetchData = async (endpoint) => {

        return await fetch(endpoint)
            .then(response => {
                return response.json();
            }).then(response => {
                setData({ ...data, image: response.sprites.front_default })
                setLoading(false);
            })
    }

    useEffect(() => {
        const { url } = data;
        if (!data.image) fetchData(url)
    }, []);

    if (loading) return null;

    return (
        <div className="card col-3 p-4">
            <img src={data.image} />
            <h5>
                {data.name}
            </h5>
            <button onClick={() => onDelete(data)}>
                Borrar pokemon
            </button>
        </div>
    )
};

export default Card;
