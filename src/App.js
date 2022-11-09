import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  render() {
    const tenHighestPopulation = [
      { country: "World", population: 7693165599 },
      { country: "China", population: 1377422166 },
      { country: "India", population: 1295210000 },
      { country: "USA", population: 323947000 },
      { country: "Indonesia", population: 258705000 },
      { country: "Brazil", population: 206135893 },
      { country: "Pakistan", population: 194125062 },
      { country: "Nigeria", population: 186988000 },
      { country: "Bangladesh", population: 161006790 },
      { country: "Russian", population: 146599183 },
      { country: "Japan", population: 126960000 },
    ];
   const head = "30days of React";
    const subtitle = "World Population";
    const title = "Ten Most Populated Countries";
    return (
      <div className="wrapper">
        <Header head={head} subtitle={subtitle} title={title} />
        <Main tenHighestPopulation={tenHighestPopulation} />
      </div>
    );
  }
}

export default App;
