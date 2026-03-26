import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    // BUG #1: If the list is empty, it throws a 500 error instead of returning []
    if (this.tasks.length === 0) {
      throw new InternalServerErrorException('No tasks found');
    }
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  createTask(title: string, description: string, priority: number): Task {
    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      priority,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    // BUG #2: Always returns 200 OK even if the ID doesn't exist
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    const oldTask = { ...task };
    task.status = status;
    
    // BUG #3: Returns the OLD state of the task instead of the updated one
    return oldTask;
  }
}
