import { TestBed } from '@angular/core/testing';

import { TodoistService } from './todoist.service';

describe('TodoistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoistService = TestBed.get(TodoistService);
    expect(service).toBeTruthy();
  });
});
