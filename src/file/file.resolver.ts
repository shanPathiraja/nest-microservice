import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileService } from './file.service';
import { File } from './entities/file.entity';
import { UpdateFileInput } from './dto/update-file.input';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { createWriteStream } from 'fs';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: any,
  ): Promise<boolean> {
    console.log('filename', filename);
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`../uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', (err) => {
          console.log('error', err);
          reject(false);
        }),
    );
  }

  @Query(() => [File], { name: 'file' })
  findAll() {
    return this.fileService.findAll();
  }

  @Query(() => File, { name: 'file' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileService.findOne(id);
  }

  @Mutation(() => File)
  updateFile(@Args('updateFileInput') updateFileInput: UpdateFileInput) {
    return this.fileService.update(updateFileInput.id, updateFileInput);
  }

  @Mutation(() => File)
  removeFile(@Args('id', { type: () => Int }) id: number) {
    return this.fileService.remove(id);
  }
}
