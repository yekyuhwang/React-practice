import React, { useState } from "react";

const Gugudan2 = () => {
  const [result, setResult] = useState("");

  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result2, setResult2] = useState("");

  const useInput = () => {
    const [value, setValue] = useState("Mr.");

    const onChange = (event) => {
      setValue(event.target.value);
    };

    return { value, onChange };
  };

  const search = useInput();
  const gugudan = useInput();

  const clickHandler = () => {
    console.log(search.value);

    setResult(search.value);
  };

  const gugudanClickHandler = () => {
    console.log(gugudan.value);

    if (parseInt(gugudan.value) === first * second) {
      setResult2("정답: " + gugudan.value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult2("땡!");
    }
  };

  return (
    <div>
      <input type="text" {...search} />
      <button onClick={clickHandler}>검색</button>
      <div>{result}</div>
      <br />

      <div>
        <div>
          {first} 곱하기 {second}는?
        </div>
        <input type="number" {...gugudan} />
        <button onClick={gugudanClickHandler}>입력!</button>
        <div>{result2}</div>
      </div>
    </div>
  );
};

export default Gugudan2;
