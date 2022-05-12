import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/common/Header";
import ItemsList from "./pages/ItemsList";
import ItemDetails from "./pages/ItemDetails";
import { App as S } from "./styles";

function App() {
  return (
    <Router>
      <Header />
      <S.PageContentWrapper>
        <Switch>
          <Route exact path="/" component={ItemsList} />
          <Route exact path="/item" component={ItemDetails} />
          <Redirect to={"/"} />
        </Switch>
      </S.PageContentWrapper>
    </Router>
  );
}

export default App;
