import { fetchData, PostType } from "./data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomPromise<T, E = any> = Promise<T> & {
  status?: "fulfilled" | "rejected" | "pending";
  value?: T;
  reason?: E;
}

function PostsTab() {
  const posts: PostType[] = use<PostType[]>(fetchData("/posts/"));
  return (
    <ul className="items">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </ul>
  )
}

function Post({ title }: {title: string}) {
  return (
    <li className="item">
      {title}
    </li>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function use<T, E = any>(promise: CustomPromise<T, E>): T {
  if (promise.status === "fulfilled") {
    return promise.value as T;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: T) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: E) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

export default PostsTab;