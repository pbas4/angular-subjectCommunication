import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(private ns: NotificationService) { }

  emitNotification(notification) {
    this.ns.emit(notification);
  }

}
