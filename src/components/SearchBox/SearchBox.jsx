import PropTypes from "prop-types";
import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  const filterFieldId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={filterFieldId}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
};
