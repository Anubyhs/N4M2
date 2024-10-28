import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "A Pirâmide Vermelha",
        resumo:
          "O livro segue os irmãos Kane, Carter e Sadie, quando descobrem que são descendentes dos faraós e mágicos do Egito antigo. Como resultado, eles são capazes de hospedar deuses e usar magia.",
        autores: ["Rick Riordan"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "O Trono de Fogo",
        resumo:
          "Neste segundo livro, Carter Kane e sua irmã Sadie vivem mergulhados em problemas pois Seus pais pertenciam a Casa da Vida, uma organização de magos egípcios de milhares de anos, que aprisionaram os deuses Egípcios existentes.",
        autores: ["Rick Riordan"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "A Sombra da Serpente",
        resumo:
          "Apesar de seus melhores esforços, Carter e Sadie Kane parecem não conseguir abater Apófis, a Serpente do Caos. Agora Apófis está ameaçando mergulhar o mundo na escuridão eterna.",
        autores: ["Rick Riordan"],
      },
    ]
   }

   public obterLivros():Livro[]{
    return this.livros
  }

  public incluir(novoLivro: Livro):void {
    novoLivro.codigo = this.livros.length > 0 ? this.livros.at(-1)!.codigo+1:1;
    this.livros.push(novoLivro);
  }

  public excluir(codBusca: number):void{
    const busca = this.livros.findIndex(livro => livro.codigo === codBusca);
    if (busca !== -1) {
      this.livros.splice(busca, 1);
    }
  }
}
