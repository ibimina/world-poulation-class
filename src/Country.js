import React from "react";
class Country extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
   
    render() { 
         const { count } = this.props;

         const population = count.map((list) => (
           <li key={list.population}>
             {" "}
             {list.population.toLocaleString("en-US")}{" "}
           </li>
         ));
         const country = count.map((list) => (
           <li key={list.country}> {list.country} </li>
         ));
         let maxPo = count[0].population;
         const wrap =count.map((list) => (
           <li
             key={list.country}
             style={{
               maxWidth: (Number(list.population) / Number(maxPo)) * 100 + "%",
             }}
           >
             {" "}
           </li>
         ));

        return (
          <>
            <div className="country"> {country}</div>
            <div className="length"> {wrap}</div>
            <div className="population">{population}</div>
          </>
        );
    }
}
 
export default Country;