import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsStoreService {
  private notifications = [];
  private notifications$ = new BehaviorSubject<any[]>([]);
  constructor() { }

  public select$ = () => this.notifications$.asObservable();

  public dispatch(notifications){
    this.notifications.push(notifications);
    this.notifications$.next([...this.notifications]);
  }
}
