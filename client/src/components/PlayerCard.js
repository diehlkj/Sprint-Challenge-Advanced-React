import React from 'react';
function PlayerCard(props) {
    return (
        <div className="player-card">
                <h1>{props.name}</h1>

                <h2>{props.country}</h2>

                <p> Searches: {props.searches} </p>
        </div>
    )
}
export default PlayerCard