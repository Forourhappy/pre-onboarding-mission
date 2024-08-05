import { SearchData } from "./useSearch.ts";
import styles from "./searchSelect.module.css";

type Props = {
  list: SearchData[];
  focusIndex: number;
};
export const SearchSelect = ({ list, focusIndex }: Props) => {
  return (
    <div className={styles.selectList} role="listbox">
      {list.map((data, index) => (
        <div
          className={focusIndex === index ? styles.focus : ""}
          key={data.key}
          role="option"
          aria-selected={focusIndex === index}
        >
          <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
        </div>
      ))}
    </div>
  );
};
