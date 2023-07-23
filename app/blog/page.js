export default function Blog() {
  const post = [
    {
      id: 1,
      title: "How to learn react in 10 days",
      description: "Desc text",
    },
    {
      id: 2,
      title: "How to learn react in 10 days",
      description: "Desc text",
    },
    {
      id: 3,
      title: "How to learn react in 10 days",
      description: "Desc text",
    },
    {
      id: 4,
      title: "How to learn react in 10 days",
      description: "Desc text",
    },
  ];

  return (
    <div>
      <div className="blog-post-container">
        {post &&
          post.map((item, key) => (
            <div key={key}>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
