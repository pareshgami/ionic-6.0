import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Date Time', url: 'date-time-picker', icon: 'calendar' },
    { title: 'Modal', url: 'modal', icon: 'albums' },
    { title: 'Accordion', url: 'accordion', icon: 'chevron-down' },
    { title: 'Fade Header', url: 'header-fade', icon: 'square' },
    { title: 'Breadcrumbs', url: 'breadcrumb', icon: 'code-working' } 
  ];
  constructor() {}
}
