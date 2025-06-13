import React from "react";
import DebounceInput from "../../debounceInput";

const TableSearch = ({ setSearchKeyword }) => {
  return (
    <div className="flex items-end justify-between">
      <DebounceInput setDebouncedValue={setSearchKeyword ?? (() => {})} />
    </div>
  );
};

export default TableSearch;
