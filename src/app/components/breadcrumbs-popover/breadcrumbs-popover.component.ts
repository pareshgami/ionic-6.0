import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs-popover',
  templateUrl: './breadcrumbs-popover.component.html',
  styleUrls: ['./breadcrumbs-popover.component.scss'],
})
export class BreadcrumbsPopoverComponent implements OnInit {
  @Input() collapsedBreadcrumbs: HTMLElement[] = [];
  constructor() { }

  ngOnInit() {}

}
