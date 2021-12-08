import { useQuery, gql } from "@apollo/client";
import { useParams, RouteComponentProps } from "@reach/router";

const GET_GRADES = gql`
  query getGrades($codigo: String!) {
    grades(codigo: $codigo) {
      codigo
      nombre
      apellido_paterno
      apellido_materno
      midterm_grammar
      midterm_oral
      final_grammar
      final_oral
      workshops
      cultural_task
      mini_project
      reading
      listening
      final
      situation
    }
  }
`;

function GradeBook(props: RouteComponentProps) {
  const params = useParams();
  const { data, error, loading } = useQuery(GET_GRADES, {
    variables: { codigo: params.codigo }
  });
  if (loading) return <div>Loading...</div>;
  if (error) {
    if (
      (error.graphQLErrors[0].message =
        "Cannot return null for non-nullable field Query.grades.")
    )
      return (
        <div>No encontramos calificaciones para el codigo {params.codigo}</div>
      );
    return <div>{JSON.stringify(error)}</div>;
  }
  if (data)
    return (
      <div>
        <strong>Situation:</strong> A - Acreditado, NA - No Acreditado - D
        Desertor
        <ul>
          {Object.keys(data.grades).map(key => {
            if (key === "__typename") return null;
            return (
              <li key={key}>
                <strong>{key}:</strong> {data.grades[key]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  return <div />;
}

export default GradeBook;
