import { ReactNode, useTransition } from "react"

type PropsType = {
  children: ReactNode,
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ children, isActive, onClick }: PropsType) {
  const [isPending, startTransition] = useTransition();

  console.warn(isPending);
  if (isPending) {
    return <b className="text-red-200">{children}</b>
  }

  if (isActive) {
    return <b>{children}</b>
  }
  return (
    <button onClick={() => {
      startTransition(() => {
        onClick();
      });
    }}>
      {children}
    </button>
  )
}