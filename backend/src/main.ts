import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3001 || 8080;

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {cors:true});
	app.enableCors();
 
	await app.listen(port);
	Logger.log(`Server is listening on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
