import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  newService = {
    title: '',
    description: '',
  };

  editService: any = null;  // For editing the service
  services: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.services = this.dataService.getServices(); // Fetch data on load
  }

  addService() {
    if (this.newService.title && this.newService.description) {
      this.dataService.addService({ ...this.newService });
      this.newService = { title: '', description: '' }; // Reset form
      this.services = this.dataService.getServices(); // Update data
    }
  }

  deleteService(service: any) {
    this.dataService.deleteService(service);
    this.services = this.dataService.getServices(); // Update data after deletion
  }

  editServiceDetails(service: any) {
    this.editService = { ...service }; // Copy service for editing
  }

  saveEditedService() {
    if (this.editService && this.editService.title && this.editService.description) {
      const originalService = this.services.find(s => s.id === this.editService.id);
      if (originalService) {
        this.dataService.updateService(originalService, this.editService);
      }
      this.editService = null;  // Exit edit mode
      this.services = this.dataService.getServices(); // Reload data
    }
  }
}
