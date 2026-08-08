import { useState, useEffect, useRef } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("here");
    console.log(buttonRef);
  }, [count]);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    buttonRef.current.style.backgroundColor = "red";
    buttonRef.current.style.borderColor = "red";
  };

  const handleClick = () => {
    console.log("you clicked it ");
    setCount(count + 1);
  };
  const handleClick2 = (name) => {
    console.log(`you clicked it ${name}`);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <p onDoubleClick={() => handleClick()}>Hello {name}!</p>
      <button ref={buttonRef} className="here1" onClick={handleNameChange}>
        Change Name
      </button>
      <button onClick={() => handleClick2("Test")}>Click me 2</button>
      <button onClick={(e) => handleClick3(e)}> Click me 3</button>
    </main>
  );
};

export default Content;
