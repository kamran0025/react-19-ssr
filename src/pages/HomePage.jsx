import React from "react";
import Redirect from "../component/Redirect";

const HomePage = () => {

  return (
    <div>
      HomePage <Redirect path="/about">Go to About</Redirect>
    </div>
  );
};

export default HomePage;
