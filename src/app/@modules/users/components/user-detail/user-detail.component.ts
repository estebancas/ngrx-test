import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
