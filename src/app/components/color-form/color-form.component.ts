import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent  {

  public newColor = '';

  @Output()
  public colorSubmitted = new EventEmitter<string>();

  public addNewColor() {
    this.colorSubmitted.emit(this.newColor);
  }

}
