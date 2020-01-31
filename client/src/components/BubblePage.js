import React, { useState, useEffect } from "react";
import axios from "axios";

import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  
    useEffect(() => {
      axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => {
        console.log(res);
        setColorList(res.data);
        console.log(colorList);
      })
      // .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  }, [])


  return (
    <>
      <h1>BubblesPage rendering</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;


//If you can't figure this out, you have class component set up below







// import React from "react";
// import axios from "axios";

// import {axiosWithAuth} from "../utils/axiosWithAuth";

// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";

// class BubblePage extends React.Component {
//   state = {
//     colorList: []
//   }
//   // fetch your colors data from the server when the component mounts
//   // set that data to the colorList state property

//   // componentDidMount() {
//   //   this.getData()
//   // }

//   render() {
//     return (
//       <>
//       <h1>BubblesPage rendering</h1>
//       <ColorList colors={colorList} updateColors={setColorList} />
//       <Bubbles colors={colorList} />
//     </>
//     )
//   }

// };

// export default BubblePage;

