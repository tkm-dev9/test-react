import { memo } from "react";

const PostsTab = memo(() => {
  const items: JSX.Element[] = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  )
});

function SlowPost({ index }: { index: number}) {
  const startTime = performance.now();
  // eslint-disable-next-line no-empty
  while (performance.now() - startTime < 1) {}

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

export default PostsTab;