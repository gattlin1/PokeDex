import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private userTextSubject = new BehaviorSubject('');
  public userTextObservable = this.userTextSubject.asObservable();


  public onUserInput(userText: string): void {
    this.userTextSubject.next(userText);
  }
}
