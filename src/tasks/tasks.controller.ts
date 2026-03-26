import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskStatusDto } from './dto/tasks.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @ApiResponse({ status: 500, description: 'Internal server error (BUG included here).' })
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve a task by its ID' })
  @ApiParam({ name: 'id', description: 'The unique identifier of the task' })
  @ApiResponse({ status: 200, description: 'Return the requested task.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  createTask(@Body() createTaskDto: CreateTaskDto) {
    const { title, description, priority } = createTaskDto;
    return this.tasksService.createTask(title, description, priority);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiParam({ name: 'id', description: 'The unique identifier of the task to delete' })
  @ApiResponse({ status: 200, description: 'Task deleted (even if ID did not exist - BUG).' })
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
    return { message: 'Task deleted' };
  }

  @Patch('/:id/status')
  @ApiOperation({ summary: 'Update the status of a task' })
  @ApiParam({ name: 'id', description: 'The unique identifier of the task' })
  @ApiResponse({ status: 200, description: 'Return the updated task (BUG: returns old state).' })
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ) {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
