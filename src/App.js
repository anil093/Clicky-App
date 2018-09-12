import React, { Component } from "react";
import Footer from "./Components/Footer.js";
import Header from "./Components/header.js";
import Title from "./Components/title.js";
import image from "./images.json";
import Images from "./Components/image.js";
import "./App.css";

let score = 0;
let topScore = 0;
let message = " ";

class App extends Component {
  state = {
    image,
    score,
    topScore,
    message
  };

  clicked = id => {
    const image = this.state.image;

    const clickedImage = image.filter(image => image.id === id);

    if (clickedImage[0].clicked) {
      console.log("Score " + score);
      console.log("Top Score: " + topScore);

      score = 0;
      message = "Keep trying. Failure is not an option. You can do this!";

      for (let i = 0; i < image.length; i++) {
        image[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ score });
      this.setState({ image });
    } else if (score < 11) {
      clickedImage[0].clicked = true;

      score = this.state.score + 1;

      message = "You guess correctly";

      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
      }

      //Shuffle the images rendered on the browser
      image.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      //set this.state.image equal to the new image array
      this.setState({ image });
      this.setState({ score });
      this.setState({ message });
    } else {
      clickedImage[0].clicked = true;

      score = 0;
      message =
        "You've made it. Celebrate this Victory but Never STOP to conquer your Personal Legend!";
      topScore = 12;
      this.setState({ topScore });
    }
    //Shuffle the images rendered on the browser
    image.sort(function(a, b) {
      return 0.5 - Math.random();
    });

    this.setState({ image });
    this.setState({ score });
    this.setState({ topScore });
  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Title />
        <div className="wrapper">
          {this.state.image.map(image => (
            <Images
              name={image.name}
              image={image.image}
              clicked={this.clicked}
              key={image.id}
              id={image.id}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
