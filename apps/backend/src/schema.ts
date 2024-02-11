import { builder } from './builder';
import { PostType } from './models';

builder.queryType({
  fields: (t) => ({
    name: t.field({
      description: 'Hello, World!',
      type: 'String',
      resolve: () => 'Hello, World! Welcome to ferraille',
    })
  }),
});




builder.mutationType({
  fields: (t) => ({
    post: t.field({
      type: PostType,
      nullable: true,
      args: {
        title: t.arg.string({ required: true }),
        content: t.arg.string({ required: true })
      },
      resolve: async (_root, args, ctx) => {
        const res = await ctx.db.insertInto('Post').values({
          title: args.title,
          content: args.content,
        }).returningAll()
        .executeTakeFirst()

        return res
      }
    })
  }),
});

export * from './models'
export * from './resolvers'

export const schema = builder.toSchema();