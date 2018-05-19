import { Injectable } from '@angular/core';

import { Log } from '../models/Log'; 

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // Properties
  logs: Log[];


  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('2/26/2018 12:35:12')},
      {id: '2', text: 'Added Bootstrap', date: new Date('2/27/2018 9:39:53')},
      {id: '3', text: 'Added logs components', date: new Date('2/28/2018 14:15:44')}
    ]
  }

  getLogs() {
    return this.logs;
  }
}
