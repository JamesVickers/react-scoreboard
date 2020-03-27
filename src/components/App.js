import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
  
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0, 
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
     this.setState( prevState => ({
       score: prevState.players[index].score += delta
     }));
    // console.log("index: ", index, "delta: ", delta);
  }

 

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            // map callback fn takes an optional index param that contains the index of the current item being processed in an array
            index={index}
            changeScore={this.handleScoreChange}      
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;
