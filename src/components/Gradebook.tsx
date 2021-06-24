import React from "react";
import { Link, useParams } from "react-router-dom";

const GradeBook = () => {
  const params: { codigo: string } = useParams();
  return (
    <div>
      {params.codigo}
      <br />
      <Link to="/">Revisar otro codigo</Link>
    </div>
  );
};

export default GradeBook;
