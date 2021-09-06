import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Heart = () => {
  const [isToggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!isToggle);
  };

  return (
    <>
      <button onClick={clickHandler}>
        {isToggle ? (
          <HeartFilled style={{ color: "#ff0000" }} />
        ) : (
          <HeartOutlined />
        )}
      </button>
    </>
  );
};

export default Heart;
