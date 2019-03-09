import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import "./index.css";

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


  schuffleFriend = id => {
    
    // Filter this.state.friends for friends with an id equal to the id of the card being clicked
    
    const friends = this.state.friends;
    const cardClicked = friends.filter(friend => friend.id === id);

    // If a card is already clicked
    if (cardClicked[0].clicked) {
      // the score is reinitialized
      score = 0;
      message = " You guessed incorrectly - Click again to start over! ";
      //the clicked value of all the cards is reinitilaized to false
      for (let i = 0; i < friends.length; i++) {
				friends[i].clicked = false;
      }
      // this.setState({message});
      // this.setState({score});
      // this.setState({friends});
      this.setState({ friends, score, message });
      // SHOULD WE SHUFFLE?
    }
    else {
      cardClicked[0].clicked = true;
      score++;
      message = " You guessed correctly ";

      if (score > topscore) {
        topscore = score;
        // this.setState({topscore});
        // this.setState({score});
        this.setState({score, topscore })
      }

      if (topscore === 12) {
        message = " YAY, You won!! Click a card to play again! ";
      }

      friends.sort(() => Math.random() - 0.5);
      // this.setState({ friends, score:   this.state.score +1 });
      this.setState({ friends, score, message });
      // this.setState({friends});
      // this.setState({score});
      // this.setState({message});
      

      // this.setState({ friends, score:   this.state.score, Topscore: this.state.topscore });
      console.log(score);
      console.log(topscore);

      // if (score > topscore) {
      //   topscore = score;
      //   this.setState({topscore});
      // }
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
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