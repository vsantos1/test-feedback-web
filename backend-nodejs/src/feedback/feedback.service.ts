import { Injectable } from '@nestjs/common';
import { FeedbackDTO } from './dtos/feedback.dto';
import { PrismaService } from '../database/PrismaService';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<FeedbackDTO[]> {
    return this.prisma.feedback.findMany();
  }
  async create(data: FeedbackDTO): Promise<FeedbackDTO> {
    return this.prisma.feedback.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  }

  async delete(id: number): Promise<void> {
    this.prisma.feedback.delete({
      where: {
        id: id,
      },
    });
  }
}
