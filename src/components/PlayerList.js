import React from 'react';
import { Consumer } from './Context/index';
import Player from './Player';

const PlayerList = () => {
  return (

  <Consumer>{({ players}) => {
    return(

      <React.Fragment>
        {players.map( (player, index) =>
          <Player 
            key={player.id.toString()} 
            index={index}      
          />
        )}
      </React.Fragment>
    );
  }
  }
  </Consumer>
  );
}

export default PlayerList;