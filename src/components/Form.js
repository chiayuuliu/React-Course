import React from "react";
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form className="dataform" onSubmit={(e) => e.preventDefault()}>
      <div className="btnWrap">
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </div>
    </form>
  );
};

export default Form;
