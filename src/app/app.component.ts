import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  notifications: string[] = ['Notification test 1', 'Notification test 2'];

  inputsData: any[] = [];

  constructor(private ns: NotificationService) {}

  ngOnInit() {
    // Notification subscription
    this.ns.notifications$
      .subscribe(
        res => this.notifications.push(res)
      );

    // Inputs data subscription
    this.ns.inputsData$
      .subscribe(
        res => {
          this.inputsData.map((input, index) => {
            if (input.id === res.id) {
              this.inputsData[index] = {
                id: res.id,
                dayOne: res.dayOne,
                dayTwo: res.dayTwo
              };
            }
          });
          console.log('this.inputsData', this.inputsData);
        },
        err => console.error(err)
      );
  }

  createProject() {
    const id = this.inputsData.length + 1;

    this.inputsData.push(
      {
        id,
        dayOne: 0,
        dayTwo: 0
      }
    );
  }

}
