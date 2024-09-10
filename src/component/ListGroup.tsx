import { useState } from "react";

interface Props {
  title: String;
  items: String[];
  handleClick: (title: String) => void;
}

function ListGroup({ items, title, handleClick }: Props) {
  var [selectedIndex, setIndex] = useState(-1);
  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {items.map((e, i) => (
          <li
            className={
              selectedIndex == i ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setIndex(i);
              handleClick(e);
            }}
            key={i}
          >
            {e}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
