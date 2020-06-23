import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-abstract.component.html',
  styleUrls: ['./icon-abstract.component.scss']
})
export class IconEditComponent implements OnInit {
  public myIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
