import { DatabaseService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

@Injectable()
export class VerifiedEmailsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createVerifiedEmailDto: Prisma.VerifiedEmailCreateInput) {
    return await this.databaseService.verifiedEmail.create({
      data: createVerifiedEmailDto,
    });
  }

  async findAll() {
    return await this.databaseService.verifiedEmail.findMany();
  }

  async findOne(email: string) {
    return await this.databaseService.verifiedEmail.findUnique({
      where: {
        email,
      },
    });
  }

  async verify(email: string) {
    return await this.databaseService.verifiedEmail.update({
      where: {
        email,
      },
      data: {
        verifiedAt: new Date(),
      },
    });
  }

  async remove(email: string) {
    return await this.databaseService.verifiedEmail.delete({
      where: {
        email,
      },
    });
  }
}
