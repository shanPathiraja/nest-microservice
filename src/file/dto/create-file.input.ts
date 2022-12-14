import { InputType, Int, Field } from '@nestjs/graphql';
import { FileUpload } from '../interfaces/file-upload';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
@InputType()
export class CreateFileInput {
  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;
}
