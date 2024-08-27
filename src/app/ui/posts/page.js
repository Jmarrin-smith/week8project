import styles from "./posts.module.css";
import { db } from "@/lib/DB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Posts() {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;
  // console.log(posts);

  function topost() {
    revalidatePath("./posts/", specpost);

    redirect("./posts/", specpost);
  }

  return (
    <>
      <h1>posts</h1>
      <div className={styles.PostsContainer}>
        {posts.map((post) => (
          <div
            className={styles.PostContainer}
            onClick={topost}
            {...(specpost = post.id)}
          >
            <div className={styles.PostImage}>
              <img key={post.id} href={post.image} />
            </div>
            <div className={styles.PostText}>
              <h3 className="underline">{post.title}</h3>
              <p key={post.id}>{post.user_name}</p>
              <p key={post.id}>{post.content}</p>
            </div>
          </div>
        ))}
        <div className={styles.PostContainer}>
          <div className={styles.PostImage}>
            <h1>postimage</h1>
          </div>
          <div className={styles.PostText}>
            <h3 className="underline">post title</h3>
            <p>post discription </p>
          </div>
        </div>
        <div className={styles.PostContainer}>
          <div className={styles.PostImage}>
            <h1>postimage</h1>
          </div>
          <div className={styles.PostText}>
            <h3 className="underline">post title</h3>
            <p>post discription</p>
          </div>
        </div>
        <div className={styles.PostContainer}>
          <div className={styles.PostImage}>
            <h1>postimage</h1>
          </div>
          <div className={styles.PostText}>
            <h3 className="underline">post title</h3>
            <p>post discription</p>
          </div>
        </div>
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul >  */}
    </>
  );
}
