import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatText, CatTextSchema } from './schemas/cat-texts.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/'),
    MongooseModule.forFeature([{ name: CatText.name, schema: CatTextSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
