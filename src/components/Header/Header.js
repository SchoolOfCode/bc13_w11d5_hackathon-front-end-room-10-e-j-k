import { searchContext } from '../searchContext';
import { useContext } from 'react';

export default function Header({ setShowFav }) {
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
      <button onClick={setShowFav}>Toggle Favourites</button>
    </div>
  );
}
