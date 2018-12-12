import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title: BehaviorSubject<string>;

  constructor() {
    this.title = new BehaviorSubject('');
  }

  getTitle() {
    return this.title.asObservable();
  }

  setTitle(title: string) {
    this.title.next(title);
  }
}
