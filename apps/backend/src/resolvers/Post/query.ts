import { builder } from "../../builder";
import { PostType } from "../../models/Post";

builder.queryFields((t) => ({
  Post: t.field({
    type: PostType,
    nullable: true,
    resolve: async (_root, _args, ctx) => {
      return await ctx.db.selectFrom("Post").selectAll().executeTakeFirst();
    },
  }),
}));
