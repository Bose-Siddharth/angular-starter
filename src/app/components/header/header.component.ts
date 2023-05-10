import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private UiService: UiServiceService, private router: Router) {
    this.subscription = this.UiService.onToggle().subscribe(value=>this.showAddTask=value)
  }

  ngOnInit(): void{

  }

  toggleAdd(){
    this.UiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route
  }
}
