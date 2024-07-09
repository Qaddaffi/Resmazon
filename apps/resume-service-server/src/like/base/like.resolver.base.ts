/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Like } from "./Like";
import { LikeCountArgs } from "./LikeCountArgs";
import { LikeFindManyArgs } from "./LikeFindManyArgs";
import { LikeFindUniqueArgs } from "./LikeFindUniqueArgs";
import { CreateLikeArgs } from "./CreateLikeArgs";
import { UpdateLikeArgs } from "./UpdateLikeArgs";
import { DeleteLikeArgs } from "./DeleteLikeArgs";
import { ResumeTemplate } from "../../resumeTemplate/base/ResumeTemplate";
import { User } from "../../user/base/User";
import { LikeService } from "../like.service";
@graphql.Resolver(() => Like)
export class LikeResolverBase {
  constructor(protected readonly service: LikeService) {}

  async _likesMeta(
    @graphql.Args() args: LikeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Like])
  async likes(@graphql.Args() args: LikeFindManyArgs): Promise<Like[]> {
    return this.service.likes(args);
  }

  @graphql.Query(() => Like, { nullable: true })
  async like(@graphql.Args() args: LikeFindUniqueArgs): Promise<Like | null> {
    const result = await this.service.like(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Like)
  async createLike(@graphql.Args() args: CreateLikeArgs): Promise<Like> {
    return await this.service.createLike({
      ...args,
      data: {
        ...args.data,

        resumeTemplate: args.data.resumeTemplate
          ? {
              connect: args.data.resumeTemplate,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Like)
  async updateLike(@graphql.Args() args: UpdateLikeArgs): Promise<Like | null> {
    try {
      return await this.service.updateLike({
        ...args,
        data: {
          ...args.data,

          resumeTemplate: args.data.resumeTemplate
            ? {
                connect: args.data.resumeTemplate,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Like)
  async deleteLike(@graphql.Args() args: DeleteLikeArgs): Promise<Like | null> {
    try {
      return await this.service.deleteLike(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ResumeTemplate, {
    nullable: true,
    name: "resumeTemplate",
  })
  async getResumeTemplate(
    @graphql.Parent() parent: Like
  ): Promise<ResumeTemplate | null> {
    const result = await this.service.getResumeTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Like): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
