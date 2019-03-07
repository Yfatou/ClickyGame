import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


let score = 0;
let topscore;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score: 0
  };


  schuffleFriend = id => {
    
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array

    const cardClicked = friends.filter(friend => friend.id === id);

    // If a card is already clicked
    if (cardClicked[0].clicked) {
      // the score is reinitialized
      score = 0;
      //the clicked value to all the cards is reinitilaized to false
      for (let i = 0; i < friends.length; i++) {
				friends[i].clicked = false;
      }
      
      this.setState({ friends, score:   this.state.score });
      // SHOULD WE SHUFFLE?
    }
    else {
      cardClicked[0].clicked = true;
      score = score + 1;

      friends.sort(() => Math.random() - 0.5);
      this.setState({ friends, score:   this.state.score +1 });

      if (score > topscore) {
        topscore = score;
        this.setState({topscore});
      }
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List score: { this.state.score}  </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            schuffleFriend={this.schuffleFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
