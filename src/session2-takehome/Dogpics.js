import React, { useEffect, useState } from "react";
import axios from "axios";
function Dogpics() {
  const [option, setOption] = useState("random");
  const [imageLink, setImageLink] = useState("");
  const [next, setNext] = useState(1);
  useEffect(() => {
    async function fetchData(url) {
      try {
        const data = await axios.get(url);
        // const data = await res.json();
        console.log(data.data.message);
        setImageLink(data.data.message);
      } catch (e) {
        console.log(e);
      }
    }
    if (option === "random") {
      fetchData("https://dog.ceo/api/breeds/image/random");
    } else {
      fetchData(`https://dog.ceo/api/breed/${option}/images/random`);
    }
  }, [option, next]);
  return (
    <>
      <p>
        Select a breed:
        <select
          defaultValue="random"
          onChange={(e) => {
            setOption(e.target.value);
            // console.log(option);
          }}
        >
          <option value="random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
      </p>
      <div>
        <img className="image" src={imageLink} alt="..." />
      </div>

      <button
        onClick={(e) => {
          console.log(next);
          setNext((next) => next + 1);
        }}
      >
        Next
      </button>
    </>
  );
}
export default Dogpics;
