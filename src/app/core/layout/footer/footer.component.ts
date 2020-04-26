import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from 'src/app/notification/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  public notification = '';
  public notitication$;
  public requestmsj;

  constructor(private notificationsStore: NotificationsStoreService) { }

  ngOnInit() {
    this.notitication$ = this.notificationsStore.select$().subscribe(n => n.forEach(r => {
      this.requestmsj = r.toString();
    }));
  }
}
