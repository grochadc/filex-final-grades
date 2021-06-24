import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [codigo, setCodigo] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setCodigo(e.target.value)} />
      <button onClick={() => history.push(`grades/${codigo}`)}>Enviar</button>
    </div>
  );
};

export default Home;
