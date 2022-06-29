import { LoginService } from './../../../services/login.service';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Login } from 'src/app/models/login';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  
 constructor(private formBuilder: FormBuilder, private service: LoginService, private toastr: ToastrService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialog : MatDialogRef<LoginUsuarioComponent>
){}

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // })

  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // @Input() error!: string | null;

  // @Output() submitEM = new EventEmitter();
  

  ngOnInit(): void {
    
  }
  
}
