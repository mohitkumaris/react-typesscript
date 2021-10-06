import { Provider } from "react-redux";
import { store } from "../store";
import RepositoriesList from "./RepositoriesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search for packages</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
