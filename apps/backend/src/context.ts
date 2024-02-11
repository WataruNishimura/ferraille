import { Kysely } from "kysely";
import { DB } from "./types";
import { D1Dialect } from "kysely-d1";
import { D1Database } from "@cloudflare/workers-types";

const connection = (db: D1Database) => new Kysely<DB>({

  dialect: new D1Dialect(
    {
      database: db
    }
  )
}
)

export type Context = {
  db: Kysely<DB>
}

export const createContext = (db: D1Database): Context => {
  return {
    db: connection(db)
  }
}