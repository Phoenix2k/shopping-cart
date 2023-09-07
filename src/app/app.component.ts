import { Component } from '@angular/core';

import { LoggerService } from '@services/logger/logger.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(private logger: LoggerService) {
    this.logger.info('App is starting 🚀');
  }
}
