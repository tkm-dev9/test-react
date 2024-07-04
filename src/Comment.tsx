import { useState } from "react";

type PropsType = {
  userId: number | null;
}

export default function Comment({ userId }: PropsType) {
  const [comment, setComment] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }
  return (
    <>
      <p>userId: {userId}</p>
      <input type="text" value={comment} onChange={handleChange} />
    </>
  )
}