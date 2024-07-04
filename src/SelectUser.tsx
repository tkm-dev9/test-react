import { useState } from "react"
import Comment from "./Comment";

export default function SelectUser() {
  const [userId, setUserId] = useState<number | null>(null);
  const handleClick1 = () => {
    setUserId(1);
  }
  const handleClick2 = () => {
    setUserId(2);
  }
  return (
    <div>
      <button onClick={handleClick1}>ボタン1</button>
      <button onClick={handleClick2}>ボタン2</button>
      <div>
        <Comment userId={userId} />
        <Comment userId={userId} key={userId} />
      </div>
    </div>
  )
}