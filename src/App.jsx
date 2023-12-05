import { useState } from "react";
import "./App.css";

function App() {
  const [myName, setMyName] = useState("Amit Kuril");
  const [like, setLike] = useState(1),
    [islike, setIsLike] = useState(false);

  // const changeName = () =>{
  //  setMyName("Amit Raju Kuril")
  // }

  // Below both are used to toggle a button
  const changeName = () => {
    let val = myName;
    if (val === "Amit Kuril") {
      setMyName("Amit Raju Kuril");
    } else {
      setMyName("Amit Kuril");
    }
    // let val = myName;
    // (val === 'Amit Kuril') ? setMyName('Amit R Kuril') : setMyName('Amit Kuril');
  };

  let onLikeButton = () => {
    setLike(like + (islike ? -1 : 1));
    setIsLike(!islike);
  };

  return (
    <>
      <div className="w-full h-full flex-col justify-center align-middle items-center">
        <h1 className="text-6xl mb-6">{myName}</h1>
        <button
          className="bg-sky-500 py-3 px-7 text-white text-4xl font-normal mb-20"
          onClick={changeName}
        >
          Register
        </button>
        <div>
          <p className={"" + (islike ? "text-blue-600" : "")}>
            <i
              style={{ fontSize: "100px" }}
              className="fa-solid fa-thumbs-up"
              onClick={onLikeButton}
            ></i>
            <p className="text-black">Like {like}</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
