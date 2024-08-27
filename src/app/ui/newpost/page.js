import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Newpostpage(params) {
  async function handleaddpost(formData) {
    "use server";

    console.log("form action done");

    const username = formData.get("username");
    const title = formData.get("title");
    const content = formData.get("content");
    const img = formData.get("img");

    await db.query(
      `INSERT INTO posts (username, title, content,) VALUES ($1, $2, $3, $4)`,
      [username, title, content, img]
    );

    revalidatePath("./posts");
    redirect("./posts");
  }

  return (
    <div>
      <h2>Add post</h2>
      <form action={handleaddpost}>
        <input name="username" placeholder="username" />
        <input name="title" placeholder="title" />
        <input name="content" placeholder="content" />
        <button>Submit</button>

        <input name="img" placeholder="image url" />
      </form>
    </div>
  );
}
