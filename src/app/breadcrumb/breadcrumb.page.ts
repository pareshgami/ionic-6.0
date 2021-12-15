import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BreadcrumbsPopoverComponent } from '../components/breadcrumbs-popover/breadcrumbs-popover.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.page.html',
  styleUrls: ['./breadcrumb.page.scss'],
})
export class BreadcrumbPage implements OnInit {

  maxBreadcrumbs = 4;

  constructor(public popoverController: PopoverController) { }

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: BreadcrumbsPopoverComponent,
      componentProps: {
        collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
      },
      event: ev
    });
    await popover.present();
  }
}
