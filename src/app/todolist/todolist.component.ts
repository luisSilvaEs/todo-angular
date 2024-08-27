import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {

  taskArray = [{
    taskName: 'Brush teeth',
    isCompleted: false,
  }]
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  onSubmit(form: FormsModule) {

  }

}
