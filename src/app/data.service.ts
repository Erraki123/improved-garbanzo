import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private services: any[] = [];

  getServices() {
    return this.services;
  }

  addService(service: any) {
    this.services.push(service);
  }

  deleteService(service: any) {
    this.services = this.services.filter((s) => s !== service);
  }

  updateService(oldService: any, newService: any) {
    const index = this.services.findIndex(service => service === oldService);
    if (index !== -1) {
      this.services[index] = {...newService};
    }
  }
}
