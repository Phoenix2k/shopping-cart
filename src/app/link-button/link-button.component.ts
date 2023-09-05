import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css'],
})
export class LinkButtonComponent {
  @Input() href: string | undefined = undefined;
  @Input() routerLink: string | undefined = undefined;
}
