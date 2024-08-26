import styles from "./post.module.css";

export default function PostPage({ params }) {
  // const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
  //   );
  //   const post = await response.json(); // parse the response as JSON

  console.log(params);
  return (
    <>
      <div className={styles.PostImage}>
        <p>image</p>
      </div>
      <div className={styles.PostTitle}>
        <h1>Post Page {params.id}</h1>
      </div>
      <div className={styles.PostContent}>
        <p>post content ( {params.id} content )</p>
      </div>
      <div className={styles.buffer}></div>
      <div className={styles.CommentBox}>
        <div className={styles.commenterName}>
          <h3>name</h3>
        </div>
        <div className={styles.CommentContent}>
          <p>comment</p>
        </div>
      </div>
      {/* <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    <div>
      <h1>comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.title}</li>
        ))}
      </ul>
    </div> */}
    </>
  );
}
