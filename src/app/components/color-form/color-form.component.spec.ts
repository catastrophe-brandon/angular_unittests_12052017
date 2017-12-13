import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ColorFormComponent } from './color-form.component';

const getColorFormPageObject = (de: DebugElement) => {

  const newColorInput = de.query(By.css('#new-color-input'));
  const addColorButton = de.query(By.css('button'));

  return {
    newColorInput,
    addColorButton,
  };

};

describe('ColorFormComponent', () => {

  let component: ColorFormComponent;
  let fixture: ComponentFixture<ColorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ColorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('will output submitted color', () => {

    const colorInputValue = 'orange';

    const de = fixture.debugElement;
    const pageObj = getColorFormPageObject(de);
    const colorInputElement = pageObj.newColorInput.nativeElement;

    colorInputElement.value = colorInputValue;
    colorInputElement.dispatchEvent(new Event('input'));

    component.colorSubmitted.subscribe((newColor: string) => {
      expect(component.newColor).toEqual(newColor);
      expect(newColor).toEqual(colorInputValue);
    });

    pageObj.addColorButton.nativeElement.dispatchEvent(new Event('click'));

  });
});
