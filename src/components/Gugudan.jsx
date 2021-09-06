import React, { useState } from "react";

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState();

  const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
      setValue(event.target.value);
    };

    return { value, onChange };
  };

  const gugudan = useInput();

  const clickHandler = () => {
    console.log(gugudan.value);

    if (parseInt(gugudan.value) === first * second) {
      setResult(gugudan.value + " 정답이에요!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult("땡!");
    }
  };

  return (
    <div>
      <div>
        {first} 곱하기 {second} 는 ?
      </div>
      <input type="number" {...gugudan} />
      <button onClick={clickHandler}>입력</button>
      <div>{result}</div>
    </div>
  );
};

export default Gugudan;
