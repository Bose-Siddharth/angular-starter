import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private UiService: UiServiceService) {
    this.subscription = this.UiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
