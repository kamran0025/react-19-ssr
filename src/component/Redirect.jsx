import React from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({path, children}) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(path)}>{children}</button>;
};

export default Redirect;
