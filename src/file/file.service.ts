import { Injectable } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import * as fs from 'fs';

@Injectable()
export class FileService {
  async create({ file }: CreateFileInput): Promise<any> {
    const { createReadStream, filename, mimetype, encoding } = await file;
    return new Promise((resolve, reject) => {
      createReadStream()
        .pipe(fs.createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve({ filename, mimetype, encoding }))
        .on('error', reject);
    });
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileInput: UpdateFileInput) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
