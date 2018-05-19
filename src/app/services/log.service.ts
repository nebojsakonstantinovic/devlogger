import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable, of } from 'rxjs';

import { Log } from '../models/Log'; 

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // Properties
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {id: '1', text: 'Generated components', date: new Date('2/26/2018 12:35:12')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('2/27/2018 9:39:53')},
    //   {id: '3', text: 'Added logs components', date: new Date('2/28/2018 14:15:44')}
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }

  clearState() {
    this.stateSource.next(true);
  }
}
