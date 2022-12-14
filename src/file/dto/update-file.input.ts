import { CreateFileInput } from './create-file.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FileUpload } from '../interfaces/file-upload';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
@InputType()
export class UpdateFileInput {
  @Field(() => Int)
  id: number;
  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;
}
