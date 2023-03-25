import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// Note that we declare the module as global with isGlobal set to true.
// This way we don't need to re-import the caching module if we want to
// use it in a specific service or controller.
@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [AppController]
})
export class AppModule {

}
