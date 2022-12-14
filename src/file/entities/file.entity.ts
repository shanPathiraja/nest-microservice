import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field()
  file: string;
}
