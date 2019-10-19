import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    message: "Click any image to begin!",
    score: 0,
    topScore: 0,
    color: ""
  };

  cardClick = (id) => {
    const cardClicked = this.state.cards.filter(el => el.id === id);
    console.log(cardClicked[0]);
    if (cardClicked[0].clicked === false) {
      cardClicked[0].clicked = true;

      this.incrementScore();
      this.shuffle();

    } else {
      console.log(`You Lost!`);
      this.setState({
        message: `You Lost! Click any image to start over.`,
        color: "red"
      });
      this.shake();
      this.resetGame();
      this.shuffle();
    }
  };

  incrementScore = () => {
    const newScore = this.state.score + 1;
    if (newScore === 12) {
      console.log(`You won!`)
      this.setState({
        score: newScore,
        message: `Yay, you won! Click any image to start over.`,
        color: "pink"
      });
      this.resetGame();

    } else {
      console.log(`You guessed correctly!`);
      this.setState({
        score: newScore,
        message: `You guessed correctly. Keep guessing!`,
        color: "white"
      })
      setTimeout(() => { this.setState({ color: "" }) }, 500);
    }

    if (this.state.topScore < newScore) {
      const newTopScore = this.state.topScore + 1;
      this.setState({ topScore: newTopScore });
    }
  };

  //Fisher-Yates algorithm to shuffle
  shuffle = () => {
    const array = this.state.cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  resetGame = () => {
    const newCards = this.state.cards.map(el => {
      const newObj = {}
      newObj["id"] = el.id;
      newObj["name"] = el.name;
      newObj["image"] = el.image;
      newObj["clicked"] = false;
      return newObj;
    });

    this.setState({
      score: 0,
      cards: newCards
    }, () => console.log(this.state.cards));
  };

  shake = () => {
    document.querySelector(".card-container").classList.add("shake");
    setTimeout(removeClass, 500);
    function removeClass() {
      document.querySelector(".card-container").classList.remove("shake");
    };
  };




  render() {
    return (
      <>
        <Header color={this.state.color} message={this.state.message} score={this.state.score} topScore={this.state.topScore} />

        <div className="card-container">
          {this.state.cards.map(el => (
            <Card
              changeColor={this.changeColor}
              cardClick={this.cardClick}
              id={el.id}
              key={el.id}
              name={el.name}
              image={el.image}
              clicked={el.clicked}
            />
          ))}
        </div>

      </>
    );
  }

}

export default App;
