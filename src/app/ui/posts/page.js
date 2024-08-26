import styles from "./posts.module.css";

export default async function Posts() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
  //   const posts = await response.json(); // parse the response as JSON

  console.log("something");
  return (
    <>
      <h1>posts</h1>
      <div className={styles.PostsContainer}>
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
