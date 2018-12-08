import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoistService }  from '../todoist.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project;
  items: [];
  deletionInProgress: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private todoistService: TodoistService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
    this.getItems();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoistService.getProject()
      .then(data => this.project = data.projects.filter(projectData => projectData.id === id)[0]);
  }

  getItems(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoistService.getProject()
      .then(data => {
        this.items = data.items.filter(itemData => itemData.project_id === id);
        console.log(this.items)
      });
  }

  goBack(): void {
    this.location.back();
  }

  deleteTask(id): void {
    this.deletionInProgress = true;
    console.log('deleting task', id)
    this.todoistService.deleteTask(id)
      .then(() => {
        this.getItems();
        this.deletionInProgress = false
      });
  }
}
