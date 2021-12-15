import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  modals = {
    simple: false,
    card: false,
    sheet: false
  }

  constructor(public routerOutlet: IonRouterOutlet) {}

  ngOnInit() {
  }

  open(type) {
    this.modals[type] = !this.modals[type];
  }

}
