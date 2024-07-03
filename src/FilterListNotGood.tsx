import { useEffect, useState } from "react";

type PropsType = {
  list: string[];
  filter: string;
}

export default function FilterListNotGood({ list, filter }: PropsType) {
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  //親コンポーネントが再レンダリングされるため不要
  useEffect(() => {
    const filtered = list.filter((item) => item.includes(filter));
    setFilteredItems(filtered);
  }, [list, filter]);

  console.warn('notgood');
  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
} 