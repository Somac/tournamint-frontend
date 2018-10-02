import React from 'react';

const PlayerBox = ({ player }) => {
    const img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.apiId}.jpg`
    const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
    return (
        <div className='box col-12 col-md-3'>
            <img onError={(e) => e.target.src=onError} src={img} alt={player.name} />
            <p>{player.name}</p>
        </div>
    );
};

export default PlayerBox;