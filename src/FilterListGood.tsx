type PropsType = {
  list: string[];
  filter: string;
}

export default function FilterListGood({ list, filter }: PropsType) {
  const filteredItems = list.filter((item) => item.includes(filter));

  console.warn('good');
  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}