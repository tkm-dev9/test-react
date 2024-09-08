import { ReactNode } from "react"

type PropsType = {
  children: ReactNode,
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ children, isActive, onClick}: PropsType) {
  if (isActive) {
    return <b>{children}</b>
  }
  return (
    <button onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}