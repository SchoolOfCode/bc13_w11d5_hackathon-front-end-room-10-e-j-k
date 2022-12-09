import "./App.css";
import { useState } from "react";
import Header from "../src/components/Header/Header.js";
import { searchContext } from "./components/searchContext.js";
import SearchedList from "./components/SearchedList/SearchedList";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <searchContext.Provider value={{ search, setSearch }}>
        <Header />
        <SearchedList />
      </searchContext.Provider>
    </div>
  );
}

export default App;
