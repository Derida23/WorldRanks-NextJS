import { SearchOutlined } from "@ant-design/icons";
import styles from "./SearchInput.module.css";
const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchOutlined color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
