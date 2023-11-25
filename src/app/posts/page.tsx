type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const data: Post[] = await getPostsList();

  return (
    <ul>
      {data.map(({ body, id, title }) => (
        <li key={id}>
          <h3>{title}</h3>

          <span>{body}</span>
        </li>
      ))}
    </ul>
  );
}

async function getPostsList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
