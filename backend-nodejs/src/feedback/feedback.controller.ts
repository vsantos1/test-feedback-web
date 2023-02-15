import { Controller, Post, Get, Delete, Body, HttpCode, Param } from "@nestjs/common";
import { FeedbackDTO } from './dtos/feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('v1/contacts')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  async findAll(): Promise<FeedbackDTO[]> {
    return this.feedbackService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() data: FeedbackDTO) {
    return this.feedbackService.create(data);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() id: number) {
    return this.feedbackService.delete(id);
  }
}
