import { ListMovimentacaoComponent } from './componentes/movimentacao/list-movimentacao/list-movimentacao.component';
import { ListRendaVariavelComponent } from './componentes/rendaVariavel/list-renda-variavel/list-renda-variavel.component';
import { ListRendaFixaComponent } from './componentes/rendaFixa/list-renda-fixa/list-renda-fixa.component';
import { ListTesouroDiretoComponent } from './componentes/tesouroDireto/list-tesouro-direto/list-tesouro-direto.component';
import { ListCarteirasComponent } from './componentes/carteira/list-carteiras/list-carteiras.component';
import { ListUsuariosComponent } from './componentes/Usuarios/list-usuarios/list-usuarios.component';
import { ListIndexadorRendimentosComponent } from './componentes/indexadorRendimentos/list-indexador-rendimentos/list-indexador-rendimentos.component';
import { ListarProdutoRendaVariavelComponent } from './componentes/produtoRendaVariavel/listar-produto-renda-variavel/listar-produto-renda-variavel.component';
import { ListarProdutoRendaFixaComponent } from './componentes/produtoRendaFixa/listar-produto-renda-fixa/listar-produto-renda-fixa.component';
import { ListarStatusComponent } from './componentes/statusMovimentacao/listar-status/listar-status.component';
import { HomeComponent } from './componentes/home/home.component';
import { BancoComponent } from './componentes/banco/banco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLoginComponent } from './componentes/login/list-login/list-login.component';
import { ListPoupancaComponent } from './componentes/poupanca/list-poupanca/list-poupanca.component';
import { CadastroRendaFixaComponent } from './componentes/rendaFixa/cadastro-renda-fixa/cadastro-renda-fixa.component';
import { CadastroComponent } from './componentes/poupanca/cadastro/cadastro.component';
import { CadastroRendaVariavelComponent } from './componentes/rendaVariavel/cadastro-renda-variavel/cadastro-renda-variavel.component';
import { CadastroTesouroDiretoComponent } from './componentes/tesouroDireto/cadastro-tesouro-direto/cadastro-tesouro-direto.component';

const routes: Routes = [
  {path: 'banco', component: BancoComponent},
  {path: 'login', component: ListLoginComponent},
  {path: 'poupanca', component: ListPoupancaComponent},
  {path: 'movimentacao', component: ListMovimentacaoComponent},
  {path: 'produtoRF', component: ListarProdutoRendaFixaComponent},
  {path: 'produtoRV', component: ListarProdutoRendaVariavelComponent},
  {path: 'status', component: ListarStatusComponent},
  {path: 'indexador', component: ListIndexadorRendimentosComponent},
  {path: 'usuarios', component: ListUsuariosComponent},
  {path: 'carteira', component: ListCarteirasComponent},
  {path: 'tesouroDireto', component: ListTesouroDiretoComponent},
  {path: 'rendaFixa', component: ListRendaFixaComponent},
  {path: 'rendaVariavel', component: ListRendaVariavelComponent},
  {path: 'cadastroRendaFixa', component: CadastroRendaFixaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastroRendaVariavel', component: CadastroRendaVariavelComponent},
  {path: 'cadastroTesouroDireto', component: CadastroTesouroDiretoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
