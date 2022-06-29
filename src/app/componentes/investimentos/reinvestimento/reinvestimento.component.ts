import { CadastroComponent } from '../../poupanca/cadastro/cadastro.component';
import { CadastroRendaFixaComponent } from '../../rendaFixa/cadastro-renda-fixa/cadastro-renda-fixa.component';
import { CadastroRendaVariavelComponent } from '../../rendaVariavel/cadastro-renda-variavel/cadastro-renda-variavel.component';
import { CadastroTesouroDiretoComponent } from '../../tesouroDireto/cadastro-tesouro-direto/cadastro-tesouro-direto.component';
import { PoupancaService } from './../../../services/poupanca.service';
import { TesouroDiretoService } from 'src/app/services/tesouro-direto.service';
import { RendaFixaService } from 'src/app/services/renda-fixa.service';
import { RendaVariavelService } from 'src/app/services/renda-variavel.service';
import { AddEditRendaFixaComponent } from '../../rendaFixa/add-edit-renda-fixa/add-edit-renda-fixa.component';
import { RendaVariavel } from 'src/app/models/rendaVariavel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reinvestimento',
  templateUrl: './reinvestimento.component.html',
  styleUrls: ['./reinvestimento.component.scss']
})
export class ReinvestimentoComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private poupService: PoupancaService, 
    private tesService: TesouroDiretoService,
    private rendFService: RendaFixaService,
    private rendVService: RendaVariavelService, 
    private toastr: ToastrService
  ) { }
  dataSource!: MatTableDataSource<any>;
  rendaVariavel! : RendaVariavel[];
  valorAtual:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    
  }

  ListarTodosRendaFixa(){
    this.rendFService.pegarTodos().subscribe(result => {
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    });
  }

  editarRendaFixa(row : any){
    this.dialog.open(AddEditRendaFixaComponent, {
      width: '40%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val === 'atualizado'){
        this.ListarTodosRendaFixa();
      }});
  }

}
