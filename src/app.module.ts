import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig} from '@nestjs/apollo';
import { join } from 'path';
import * as process from 'process';

@Module({
  imports: [
    FileModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
