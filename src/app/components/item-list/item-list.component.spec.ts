import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    component.items = [ 'Item 1', 'Item 2', 'Item 3' ];
    fixture.detectChanges();
  });

  it('child elements will be created', () => {
    const el = fixture.debugElement.query(By.css('ul')).nativeElement;

    expect(el.childElementCount).toEqual(3);
  });
});
