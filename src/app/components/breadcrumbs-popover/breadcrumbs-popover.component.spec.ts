import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreadcrumbsPopoverComponent } from './breadcrumbs-popover.component';

describe('BreadcrumbsPopoverComponent', () => {
  let component: BreadcrumbsPopoverComponent;
  let fixture: ComponentFixture<BreadcrumbsPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
