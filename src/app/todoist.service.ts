import { config } from '../config';
import { Injectable } from '@angular/core';
import TodoistAPI from 'todoist-js'

@Injectable({
  providedIn: 'root'
})
export class TodoistService {
  todoistApi;

  constructor() {
    this.todoistApi = new TodoistAPI(config.apiKey);
  }

  getTodoistData(): Promise<any> {
    return this.todoistApi.sync();
  }

  getProject(): Promise<any> {
    return this.todoistApi.sync();
  }

  async deleteTask(id): Promise<any> {
    const item = await this.todoistApi.items.get_by_id(id)
    item.delete()
    await this.todoistApi.commit();
    return true;
  }
}
