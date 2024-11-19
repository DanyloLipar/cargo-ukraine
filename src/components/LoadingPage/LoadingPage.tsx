import React from "react";
import loader from "../../assets/photos/loader.svg";

const LoadingPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div>
        <img
          src={loader}
          alt="loader"
          style={{
            width: "17vw",
            height: "17vw",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
