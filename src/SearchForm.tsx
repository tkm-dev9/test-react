import { useState } from "react";
// import FilterListNotGood from "./FilterListNotGood";
import FilterListGood from "./FilterListGood";

export default function SearchForm() {
  const [filter, setFilter] = useState('');
  const testListData = ['apple', 'banana', 'orange', 'pear'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }
  console.warn('serchform');
  return (
    <>
      <input
        type="text"
        placeholder="果物をフィルタリング・・・"
        value={filter}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md p-2"
      />
      {/* <FilterListNotGood list={testListData} filter={filter} /> */}
      <FilterListGood list={testListData} filter={filter} />
    </>
  )


}