import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul className="datawrap">
      {items.map((value) => (
        <ListItem key={value.id} value={value} />
      ))}
    </ul>
  );
};

export default List;
