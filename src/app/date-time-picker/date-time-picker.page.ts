import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.page.html',
  styleUrls: ['./date-time-picker.page.scss'],
})
export class DateTimePickerPage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = '';
  showModal = false;
  constructor() {}
  
  confirm() {
    this.datetime.confirm();
  }

  ngOnInit(): void {
  }
  
  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
