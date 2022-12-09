import { searchContext } from "../searchContext";
import { useContext } from "react";

export default function Header() {
  const { setSearch } = useContext(searchContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <button>Toggle Favourites</button>
    </div>
  );
}
