import { Component, OnInit } from '@angular/core';
import { TodoistService } from '../todoist.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: [];

  constructor(private todoistService: TodoistService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.todoistService.getTodoistData()
      .then(data => this.projects = data.projects);
  }

}
