import { AllSelection } from "../../../../node_modules/kysely/dist/cjs/parser/select-parser";
import { builder } from "../builder";
import { DB } from "../types";

export const PostType = builder.objectRef<AllSelection<DB, "Post">>("Post");

PostType.implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    content: t.exposeString("content")
  }),
});

