import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss']
})
export class LoginFormUiComponent implements OnInit {

  @Input() formError = '';
  @Output() login = new EventEmitter();
  formGroup: FormGroup; 

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup(      {
      login: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
      });
  }

  onFormChange(){
    this.formError='';
  }

  onSubmit(){
    if(this.formGroup.get('login')?.value != ''){
      console.log(this.formGroup.get('login')?.value);    
      console.log(this.formGroup.value);
      this.login.emit(this.formGroup.value);
    }    
  }

}
