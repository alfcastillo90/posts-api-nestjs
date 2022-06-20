import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.dev`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        uri: 'mongodb+srv://alfre:alfrassvetdam90@cluster0.z0tzn.mongodb.net/?retryWrites=true&w=majority',
      }),
      inject: [ConfigService],
    }),
    PostModule,
  ],
})
export class AppModule {}
