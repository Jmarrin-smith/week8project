import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Newpostpage(params) {
  async function handleaddpost(formData) {
    "use server";

    console.log("form action done");

    const username = formData.get("username");
    const password = formData.get("password");

    await db.query(
      `select * from users where (username, password) = VALUES ($1, $2,)`,
      [username, password]
    );

    revalidatePath("./posts");
    redirect("./posts");
  }

  return (
    <div>
      <h2>sign in</h2>
      <form action={handleaddpost}>
        <input name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
