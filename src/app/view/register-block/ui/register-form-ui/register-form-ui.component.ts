import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-form-ui',
  templateUrl: './register-form-ui.component.html',
  styleUrls: ['./register-form-ui.component.scss']
})
export class RegisterFormUiComponent implements OnInit {

  @Input() formError = '';
  @Output() login = new EventEmitter();
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
