import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.services = this.dataService.getServices(); // Load services initially
  }
}
