import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  greetServer() {
    return "Welcome to my nest js server";
  }
}
