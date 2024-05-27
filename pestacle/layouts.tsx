import React from "react";
import { layouts as baseLayouts } from "@gpichot/spectacle-deck";

const layouts = {
  ...baseLayouts,
  mainSection: (props) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
        {...props}
      >
        {props.children}
      </div>
    );
  },
};

export default layouts;
