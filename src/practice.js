function App() {
  const title = "blog post";
  const body = "This is blog post of body";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];
  const loading = false;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>Hello this is paragraph and {body}</p>
      {5 + 5}

      {showComments && commentBlock}
    </div>
  );
}
export default App;
