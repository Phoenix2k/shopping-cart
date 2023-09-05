import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  styleUrls: ['./link-button.component.css'],
  templateUrl: './link-button.component.html',
})
export class LinkButtonComponent {
  @Input() href: string | undefined = undefined;
  @Input() routerLink: string | undefined = undefined;
}
