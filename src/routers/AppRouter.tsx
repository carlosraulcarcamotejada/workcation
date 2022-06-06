import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import SearchBar from "../components/SearchBar/SearchBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <div className="min-h-screen bg-gray-200 antialiased">
          <Header />
          <SearchBar />
          <Main />
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
