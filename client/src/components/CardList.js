import React from 'react';
import PlayerCard from "./PlayerCard";

function CardList({ players }){
  console.log(players);
    return (
        <div className="card-list">
            {players.map((player) => {
                return (
                  <PlayerCard 
                    key=          {player.id}
                    name=         {player.name}
                    country=      {player.country}
                    searches=     {player.searches}
                  />
                )
              })}
        </div>
    ) 
}
export default CardList