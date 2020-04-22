import 'reflect-metadata';
import { graphql } from 'graphql';
import { AppModule } from './app/app.module';

(async function main() {
  const result = await graphql(AppModule.schema,
    `{ hello }`,
    null,
    { test: 'foo' },
  );
  console.log(result);
})();

