import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import "./style.css";

export enum ErrorCode {
  NOT_FOUND = "404",
  SERVER = "500",
}

const ErrorMessages = {
  404: { code: 404, message: "Players Not Found" },
  500: { code: 500, message: "Spellbook Not Found" },
};
type ErrorPageProps = { errorCode?: 404 | 500 };
const ErrorPage = ({ errorCode = 404 }: ErrorPageProps) => {
  const history = useHistory();
  return (
    <div className="site">
      <div className="sketch">
        <div className="bee-sketch red"></div>
        <div className="bee-sketch blue"></div>
      </div>

      <h1>
        {ErrorMessages[errorCode].code}:
        <small>{ErrorMessages[errorCode].message}</small>
        <Button variant="outlined" onClick={() => history.goBack()}>
          <>
            <ArrowCircleLeftIcon sx={{ mr: "0.5rem" }} />
            Leave This Place !
          </>
        </Button>
      </h1>
    </div>
  );
};

export default ErrorPage;
