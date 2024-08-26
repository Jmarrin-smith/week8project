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

    await db.query(
      `INSERT INTO candles (username, title, content) VALUES ($1, $2, $3)`,
      [username, title, content]
    );

    // revalidate that page to ensure ALL the new candles are shown
    revalidatePath("./posts");
    // redirect tot he page that shows the list of candles
    redirect("./posts");
  }

  return (
    <div>
      <h2>Add Candle</h2>
      <form action={handleaddpost}>
        <input name="username" placeholder="username" />
        <input name="title" placeholder="title" />
        <input name="content" placeholder="content" />
        <button>Submit</button>
      </form>
    </div>
  );
}
