import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs/BehaviorSubject'

@Injectable()
export class DataService {

private goals = new BehaviorSubject<any>(['initial goal', 'another silly goal']);

goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
