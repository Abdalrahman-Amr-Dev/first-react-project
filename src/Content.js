const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("you clicked it ");
  };
  const handleClick2 = (name) => {
    console.log(`you clicked it ${name}`);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <p onDoubleClick={() => handleClick()}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("Test")}>Click me 2</button>
      <button onClick={(e) => handleClick3(e)}> Click me 3</button>
    </main>
  );
};

export default Content;
