import { memo } from "react";
import { ListType } from "types/list.types";

import styles from "./styles.module.css";

const List: React.FC<ListType> = ({ list, listName }) => {
  if (!list.length) {
    return null;
  }

  return (
    <div className={styles.listContainer}>
      <h4 className={styles.listName}>{listName}</h4>
      <ul>
        {list.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(List);
