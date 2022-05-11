import * as React from "react";
import { FunctionComponent } from "react";
import "./style.css";

const PageContainer: FunctionComponent = (props) => (
  <div className="page-container" style={{ height: "100%" }}>
    {props.children}
  </div>
);

export default PageContainer;
