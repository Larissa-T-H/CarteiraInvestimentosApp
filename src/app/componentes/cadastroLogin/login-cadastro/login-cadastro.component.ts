import { Usuario } from './../../../models/usuario';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.scss']
})
export class LoginCadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: UsuarioService, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialog : MatDialogRef<LoginCadastroComponent>
    ) { }

    usuarioForm!: FormGroup;
    loginForm!: FormGroup;

  ngOnInit(): void {

    this.usuarioForm = this.formBuilder.group({
      usuarioNome : ['', Validators.required],
      usuarioSobrenome : ['', Validators.required],
      usuarioEmail : ['', Validators.required],
      usuarioTelefone : ['', Validators.required],
      usuarioCpf : ['', Validators.required],
      usuarioSenha : ['', Validators.required],

    });
  }

  EnviarFormulario(): void{
    const usuario : Usuario = this.usuarioForm.value;
   
    if(!this.editData){
      this.service.salvarUsuario(usuario).subscribe({
        next:(res) => {
            this.toastr.success('Gravando!', 'Inserido com Sucesso!');
            this.usuarioForm.reset();
            this.dialog.close('salvo');
        },
        error:()=> {
          this.toastr.error('Algo deu errado', 'Error')
        }
      })
    }
  }
}
