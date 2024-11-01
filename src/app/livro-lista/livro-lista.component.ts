import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  public editoras: Editora[];
  public livros: Livro[];

  constructor( private servEditora: ControleEditoraService, private servLivros: ControleLivrosService){
    this.editoras = [];
    this.livros = [];
  };

  ngOnInit():void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  };

  excluir = (codigo:number): void  =>{
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora:number): string =>{
    return this.servEditora.getNomeEditora(codEditora);
  }
}
