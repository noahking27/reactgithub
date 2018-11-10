import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ClickCard from "./components/ClickCard";
import pic from "./pic.json";

class App extends Component {
  state ={
    pic: pic,
    score: 0,
    highScore: 0,
    guess: ""
  };

  markCard = (id) => {
    const updatePic = this.state.pic.map(u => {
      if(u.id === id){
        if(u.clicked === true){
          this.setState({guess: "OH NO! YOU CLICKED TWICE"});
          this.resetGame();
          this.shuffleCards();
          return u;
        }
        this.setState({
          score: this.state.score +1
        });
        if(this.state.score === this.state.highScore){
          this.setState({
            highScore: this.state.highScore +1
          });
        }
        if((this.state.score +1)===this.state.pic.length){
          this.setState({guess:"YOU WON!"});
          this.resetGame();
          this.shuffleCards();
          return u;
        } else {
          this.setState({guess:"GOOD CLICK!"});
        }
        console.log(this.state.score);
        console.log(this.state.highScore);
        u.clicked = true;
      }
      return u;
    })
    this.setState({
      pic: updatePic,
    });
    this.shuffleCards();
  }

  resetGame = () => {
    const clearPic = this.state.pic.map(i => {
      i.clicked = false;
      return i;
    });
    this.setState({
      score: 0,
      pic: clearPic,
    });
  }

  shuffleCards = () => {
    const shufflePic = this.state.pic.slice();
    let picIndex = this.state.pic.length;
    let randomIndex = 0;
    let tempPic = {};
    while(picIndex) {
      randomIndex = Math.floor(Math.random()* picIndex--);
      tempPic=shufflePic[picIndex];
      shufflePic[picIndex] = shufflePic[randomIndex];
      shufflePic[randomIndex] = tempPic;
    }
    this.setState({
      pic: shufflePic,
    });
  }

  render() {
    return (
      <Wrapper id="wrapper">
        <Navigation
          score={this.state.score}
          highScore={this.state.highScore}
          guess={this.state.guess}
          />
        <div>
          {this.state.pic.map(p =>(
            <ClickCard
              pData={p}
              key={p.id}
              markCard={this.markCard}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
