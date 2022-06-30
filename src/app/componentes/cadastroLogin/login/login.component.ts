import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LoginCadastroComponent } from '../login-cadastro/login-cadastro.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioForm!: FormGroup;
  loginForm!: FormGroup;
  log: any;

  constructor(
    public dialog: MatDialog,
    private service: UsuarioService,
    private router: Router,
    private toastr: ToastrService
   ) { }

    dataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    // this.log = new FormGroup({
    //   email: new FormControl(null),
    //   senha: new FormControl(null),
    // });

  ngOnInit(): void {
    this.ListarTodosUsuarios();
    
  }


  openDialog() {
    const dialogRef = this.dialog.open(LoginCadastroComponent,{
      width: '40%',
    }).afterClosed().subscribe(val =>{
      if(val === 'salvo'){
        this.ListarTodosUsuarios();
      }
    });
  }
  ListarTodosUsuarios(){
    this.service.pegarTodos().subscribe(result => {
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }


  login(){

    const email = this.log.get('email').value;
    const senha = this.log.get('senha').value;

    this.service.obterUsuarioPorEmailSenha(email, senha).subscribe(
      (resp)=>{
        window.sessionStorage.setItem('usuario', JSON.stringify(resp));
        this.router.navigate(['resumo']);
        console.log(resp);
      },
      (error)=>{
        this.toastr.error('Verifique o email e a senha.', 'Atenção!');
      }
    )
  }
}
