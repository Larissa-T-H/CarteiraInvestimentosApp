import { LoginService } from './../../../services/login.service';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Login } from 'src/app/models/login';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {


  loginUs: any;
  constructor(private autenticacaoService: AutenticacaoService, private router: Router, private toastr: ToastrService) { 
    this.loginUs = new FormGroup({
      email: new FormControl(null),
      senha: new FormControl(null),    
    });
  }

  ngOnInit(): void {
  }

  login(): void{

    const email = this.loginUs.get('email').value;
    const senha = this.loginUs.get('senha').value;

    this.autenticacaoService.obterUsuarioEmailSenha(email, senha).subscribe(
      (resp)=>{
        window.sessionStorage.setItem('login', JSON.stringify(resp));
        this.router.navigate(['resumo']);
      },
      (error)=>{
        this.toastr.error('Verifique o email e a senha.', 'Atenção!');
      }
    )
  }

}
