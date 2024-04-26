import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatText, CatTextSchema } from './schemas/cat-texts.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user_monguinho:senha_monguinho@monguinho.ptrpqhx.mongodb.net/?retryWrites=true&w=majority&appName=monguinho',
    ),
    MongooseModule.forFeature([{ name: CatText.name, schema: CatTextSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
