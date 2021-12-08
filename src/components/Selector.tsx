import React, { useState } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
function Selector(props: RouteComponentProps) {
  const [codigo, setCodigo] = useState("");
  return (
    <div>
      Codigo:{" "}
      <input
        type="text"
        value={codigo}
        onChange={({ target }) => setCodigo(target.value)}
      />
      <button onClick={() => navigate(`grades/${codigo}`)}>Enviar</button>
    </div>
  );
}

export default Selector;
