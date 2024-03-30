import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './configs/environment';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Catch all exception
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.enableCors();
  app.setGlobalPrefix('v1');

  if (env.BUILD_MODE === 'production') {
    await app.listen(process.env.PORT, () => {
      console.log(
        `> Production: Hello ${env.AUTHOR}, Back-End Server is running at port ${process.env.PORT}`,
      );
    });
  } else {
    await app.listen(env.LOCAL_DEV_PORT, env.LOCAL_DEV_HOSTNAME, () => {
      console.log(
        `> Local DEV: Hello ${env.AUTHOR}, Back-End Server is running at http://${env.LOCAL_DEV_HOSTNAME}:${env.LOCAL_DEV_PORT}/`,
      );
    });
  }
}
bootstrap();
