import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksService } from 'src/app/tasks.service'
import { Tasks} from 'src/app/models/Tasks';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']

})


export class TasksComponent implements OnInit {

  constructor(private tasksService: TasksService) {}
  tasks: Tasks[] = []

  taskname: string = ""
  taskdescription: string =""
  

  ngOnInit(): void {
    this.tasksService
    .getTasks().subscribe(tasks => this.tasks = tasks)

  }
  
  onSubmit({value,valid}: NgForm){
    this.tasksService
      .postTask(value)
      .subscribe((task) => (this.tasks.unshift(task)));

  }
}
