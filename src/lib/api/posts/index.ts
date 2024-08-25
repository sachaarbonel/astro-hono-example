// routes/posts.ts
import { Hono } from "hono";
const posts = new Hono()
  .get("/", async (c) => {
    const posts = [
      { id: '1', category: "astro", title: "API Reference" },
      { id: '2', category: "react", title: "Creating a React Counter!" }
    ];
    return c.json({ posts });
  }
  )

export default posts;
// export type PostsType = typeof posts;