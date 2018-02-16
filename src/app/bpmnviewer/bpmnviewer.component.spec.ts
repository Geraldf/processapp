import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnviewerComponent } from './bpmnviewer.component';

describe('BpmnviewerComponent', () => {
  let component: BpmnviewerComponent;
  let fixture: ComponentFixture<BpmnviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmnviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmnviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
