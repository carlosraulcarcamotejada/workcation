import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import Main from "../components/Main/Main";
import SearchBar from "../components/SearchBar/SearchBar";

const AppRouter = () => {
  const [searchField, setSearchField] = useState<string>("");

  return (
    <Router>
      <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col ">
        <AppBar setSearchField={setSearchField} />
        <div className="xl:flex xl:flex-1">
          <SearchBar setSearchField={setSearchField} />
          <Main searchField={searchField} />
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
