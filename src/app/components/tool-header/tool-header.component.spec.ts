import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ToolHeaderComponent } from './tool-header.component';

describe('ToolHeaderComponent', () => {
  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  }));

  describe('component creation', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ToolHeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('will create', () => {
      expect(component).toBeTruthy();
    });

    it('will have correct default values', () => {
      expect(component.headerText).toEqual('');
    });

  });

  describe('test header text value', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ToolHeaderComponent);
      component = fixture.componentInstance;
      component.headerText = 'Car Tool';
      fixture.detectChanges();
    });

    it('will update header text correctly', () => {
      const expectedHeaderText = 'Car Tool';
      const actualHeaderText = fixture.debugElement.query(By.css('h1')).nativeElement.innerText;

      console.log(actualHeaderText);

      expect(actualHeaderText).toEqual(expectedHeaderText);
    });
  });
});
