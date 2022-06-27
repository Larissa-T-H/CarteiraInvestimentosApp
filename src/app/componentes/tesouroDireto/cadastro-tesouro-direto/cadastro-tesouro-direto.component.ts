import { TesouroDireto } from './../../../models/tesouroDireto';
import { IndexadorRendimentos } from './../../../models/indexadorRendimentos';
import { Banco } from 'src/app/models/banco';
import { IndexadorService } from './../../../services/indexador.service';
import { BancoService } from './../../../services/banco.service';
import { TesouroDiretoService } from './../../../services/tesouro-direto.service';
import { Carteira } from './../../../models/carteira';
import { CarteiraService } from './../../../services/carteira.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Movimentacao } from 'src/app/models/movimentacao';
import { MovimentacaoService } from './../../../services/movimentacao.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-tesouro-direto',
  templateUrl: './cadastro-tesouro-direto.component.html',
  styleUrls: ['./cadastro-tesouro-direto.component.scss']
})
export class CadastroTesouroDiretoComponent implements OnInit {

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private service: TesouroDiretoService, 
    private movService: MovimentacaoService, 
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialog : MatDialogRef<CadastroTesouroDiretoComponent>, 
    private bancoService: BancoService,
    private cartService: CarteiraService,  
    private indexService: IndexadorService
  ) { }
  bancos!: Banco[];
  carteiras! : Carteira[];
  indexadores! : IndexadorRendimentos[];
  tesouroForm!: UntypedFormGroup;
  movimentacaoForm!: FormGroup;
  actionBtn : string = "Salvar";

  ngOnInit(): void {

    this.bancoService.ListarTodos().subscribe(data => {
      this.bancos = data;
    })

    this.cartService.ListarTodos().subscribe(data => {
      this.carteiras = data;
    });

    this.indexService.ListarTodos().subscribe(data => {
      this.indexadores = data;
    });

    this.tesouroForm = this.formBuilder.group({
      tesouroDiretoId : ['', Validators.required],
      valorTotalInvestido : ['', Validators.required],
      rendimento : ['', Validators.required,],
      rentabilidade : ['', Validators.required],
      vencimento : ['', ],
      isActive : ['', Validators.required],
      liquidez : ['', ],
      custos : ['',],
      carteiraId : ['', Validators.required],
      bancoId : ['', Validators.required],
      indexadorRendimentosId : ['', Validators.required],

    });

    this.movimentacaoForm = this.formBuilder.group({
      movimentacaoId : ['', Validators.required],
      valor : ['', Validators.required],
      unidades : ['', Validators.required,],
      dataMovimentacao : ['', Validators.required],
      statusMovimentacaoId : ['', ],
    });
  }

  EnviarFormulario(): void{
    const TesouroDireto : TesouroDireto = this.tesouroForm.value; 
    const movimentacao : Movimentacao = this.movimentacaoForm.value;
    TesouroDireto.rentabilidade = TesouroDireto.rentabilidade/100;
    if(!this.editData){
      this.service.salvarTesouro(TesouroDireto).subscribe({
        next:(res) => {
            this.toastr.success('Gravando!', 'Inserido com Sucesso!');
            this.tesouroForm.reset();
            this.dialog.close('salvo');
        },
        error:()=> {
          this.toastr.error('Algo deu errado', 'Error')
        }
      })
      this.movService.Salvarmovimentacao(movimentacao).subscribe({
        next:(res) => {
            this.toastr.success('Gravando!', 'Inserido com Sucesso!');
            this.movimentacaoForm.reset();
            this.dialog.close('salvo');
        },
        error:()=> {
          this.toastr.error('Algo deu errado', 'Error')
        }
      })
    }
  }

}
