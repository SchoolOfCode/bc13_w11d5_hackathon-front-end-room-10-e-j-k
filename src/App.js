import "./App.css";
import { useState } from "react";
import Header from "../src/components/Header/Header.js";
import { searchContext } from "./components/searchContext.js";
import SearchedList from "./components/SearchedList/SearchedList";
import useToggle from "./hooks/useToggle";
import FavList from "./components/FavList/FavList.js";

function App() {
  const [search, setSearch] = useState("");
  const [showFav, setShowFav] = useToggle();

  if (!showFav) {
    return (
      <div className="App">
        <searchContext.Provider value={{ search, setSearch }}>
          <Header setShowFav={setShowFav} />
          <SearchedList />
        </searchContext.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <searchContext.Provider value={{ search, setSearch }}>
          <Header setShowFav={setShowFav} />
          <FavList />
        </searchContext.Provider>
      </div>
    );
  }
}

export default App;
