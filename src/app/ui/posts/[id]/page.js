import styles from "./post.module.css";
import { db } from "@/app/lib/DB";

export default async function PostPage({ params }) {
  const result = await db.query(`SELECT * FROM posts where id =(1$)`, [params]);
  const post = result.rows;

  const commentresult = await db.query(`SELECT * FROM comments where (1$)`, [
    post.title,
  ]);
  const comments = commentresult.rows;

  async function handleaddcomment(formData) {
    "use server";

    console.log("form action done");

    const username = formData.get("username");
    const content = formData.get("content");

    await db.query(
      `INSERT INTO candles (username, content,postid) VALUES ($1, $2, $3)`,
      [username, content, params]
    );
  }

  async function deletepost() {
    await db.query(`DELETE FROM posts where id = (1$)`[params]);
  }

  console.log(params);
  return (
    <>
      {post.map((post) => (
        <>
          <div className={styles.PostImage}>
            <img key={post.id} href={post.image} />
          </div>
          <div className={styles.PostTitle}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.PostContent}>
            <p>{post.content}</p>
          </div>
        </>
      ))}
      <div className={styles.buffer}></div>
      <button action={deletepost}>delete</button>
      <div className={styles.buffer}></div>
      <div>
        <h2>Add Comment</h2>
        <form action={handleaddcomment}>
          <input name="username" placeholder="username" />
          <input name="content" placeholder="content" />
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.buffer}></div>
      <div className={styles.CommentBox}>
        {comments.map((comment) => (
          <>
            <div className={styles.commenterName}>
              <h3>name</h3>
            </div>
            <div className={styles.CommentContent}>
              <p>comment</p>
            </div>
          </>
        ))}
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
