import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import "./index.css";

// Variable intitialization
let score = 0;
let topscore = 0;
let message = " Click an image to begin! ";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore,
    score,
    message
  };


  //On click event 
  schuffleFriend = id => {
    
    // Filter this.state.friends for friends with an id equal to the id of the card being clicked
    const friends = this.state.friends;
    const cardClicked = friends.filter(friend => friend.id === id);
 
    // If a card is already clicked => clicked = true
    if (cardClicked[0].clicked) {
      // the score is reinitialized
      score = 0;
      message = " You guessed incorrectly - Click again to start over! ";
      //the clicked value of all the cards is reinitilaized to false
      for (let i = 0; i < friends.length; i++) {
				friends[i].clicked = false;
      }

      this.setState({ friends, score, message });
     
    }
    else {// clicked = false ==> card not clicked
      cardClicked[0].clicked = true;
      score++;
      message = " You guessed correctly ";

      // If the player score is higher than the previous topscore
      if (score > topscore) {
        topscore = score; // The new topscore is the score
        this.setState({score, topscore })
      }

      if (topscore === 12) {
        message = " YAY, You won!! Click a card to play again! ";
      }

      // Shuffle the cards
      friends.sort(() => Math.random() - 0.5);
      
      this.setState({ friends, score, message });
    }
  };

  
  render() {
    return (
      <div className="test">
        <NavBar 
          score={this.state.score}
          topscore={this.state.topscore}
          message={this.state.message}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              schuffleFriend={this.schuffleFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;