import React from "react";
import FormButton from "../FormButton/FormButton";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { myAction, myOtherAction } from "@/actions/myAction";
import Input from "../Input/Input";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const handleOnChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      myAction(term);
    },
    300
  );
  return (
    <form className={styles.form} action={myOtherAction}>
      <Input
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleOnChange}
      />
      <FormButton>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        <span>Search</span>
      </FormButton>
    </form>
  );
};
export default Search;
