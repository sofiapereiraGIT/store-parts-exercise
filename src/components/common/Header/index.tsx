import { useHistory } from "react-router-dom";
import { Header as S } from "./styles";

export default function Header() {
  const history = useHistory();

  return (
    <S.Header>
      <S.Title data-testid="headerTitle" onClick={() => history.push("/")}>
        Store Parts
      </S.Title>
    </S.Header>
  );
}
