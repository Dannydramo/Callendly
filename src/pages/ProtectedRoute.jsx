import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <p className="mt-24 text-6xl">
        You must be authenticated to access this page.
      </p>
    );
  }

  return children;
};

export default ProtectedRoute;
