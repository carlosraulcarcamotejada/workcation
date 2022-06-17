import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import Main from "../components/Main/Main";
import SearchBar from "../components/SearchBar/SearchBar";
import useForm from "../hooks/useForm";


const AppRouter = () => {
  const [searchField, setSearchField] = useState<string>('');

  const {form:{inputSearch},handleInputChange,handleReset} = useForm();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchField(inputSearch);
    handleReset();
  }

  return (
    <Router>
        <form onSubmit={handleSubmit}>
          <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col ">
            <AppBar handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset} />
              <div className="xl:flex xl:flex-1">
                <SearchBar handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset}  />
                <Main searchField={searchField} />
              </div>
            </div>
        </form>
    </Router>
  );
};

export default AppRouter;
