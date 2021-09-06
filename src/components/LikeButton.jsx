import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const LikeButton = () => {
  const [isToggled, setToggled] = useState(false);

  const clickHandler = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <button onClick={clickHandler}>
        {isToggled ? (
          <HeartFilled style={{ color: "#ff0000" }} />
        ) : (
          <HeartOutlined />
        )}
      </button>
    </>
  );
};

export default LikeButton;
