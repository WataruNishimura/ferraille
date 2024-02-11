import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import type { D1Database } from '@cloudflare/workers-types';
import { createContext } from "./context";

export interface Env {
  DB: D1Database
}

const yoga = createYoga({
  schema
})

export default {
  async fetch(request: Request, env: Env) {
    const context = createContext(env.DB)
    const response = await yoga(request, context)
    await context.db.destroy()
    return response
  }
}