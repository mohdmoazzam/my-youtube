import React from "react";
import Button from "./Button";
import { buttonList } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex h-16 items-center justify-center">
      {buttonList?.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
