import { useState } from "react";
import Container from "./components/container/Container";
import Paragraph from "./components/paragraph/Paragraph";
import StarComponent from "./components/starComponent/StarComponent";
import Card from "./components/card/Card";
import Title from "./components/title/Title";
import Rating from "./components/buttons/rating";
import Submit from "./components/buttons/submit";

function App() {
  const [currentlyClicked, setCurrentlyClicked] = useState(0);
  const onClick = (value) => {
    setCurrentlyClicked((previous) => {
      if (previous === value) return 0;
      return value;
    });
  };

  return (
    <div className="app">
      <Container>
        <Card>
          <StarComponent />
          <Title />
          <Paragraph />
          <Rating currentlyClicked={currentlyClicked} setValue={onClick}>
            1
          </Rating>
          <Rating currentlyClicked={currentlyClicked} setValue={onClick}>
            2
          </Rating>
          <Rating currentlyClicked={currentlyClicked} setValue={onClick}>
            3
          </Rating>
          <Rating currentlyClicked={currentlyClicked} setValue={onClick}>
            4
          </Rating>
          <Rating currentlyClicked={currentlyClicked} setValue={onClick}>
            5
          </Rating>
          <Submit>Submit</Submit>
        </Card>
      </Container>
    </div>
  );
}

export default App;