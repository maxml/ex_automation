import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task.model';

export class CreateTaskDto {
  @ApiProperty({ description: 'The title of the task', example: 'Buy groceries' })
  title: string;

  @ApiProperty({ description: 'Detailed description of the task', example: 'Milk, bread, and eggs' })
  description: string;

  @ApiProperty({ description: 'Priority level (1-5)', example: 3, minimum: 1, maximum: 5 })
  priority: number;
}

export class UpdateTaskStatusDto {
  @ApiProperty({ description: 'Status of the task', enum: TaskStatus, example: TaskStatus.DONE })
  status: TaskStatus;
}
