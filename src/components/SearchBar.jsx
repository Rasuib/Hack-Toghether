import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Find Your Teammates"
        className={styles.searchBar}
      />
    </div>
  );
}

export default SearchBar;
