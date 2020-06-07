import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titulo = 'Cacula Bebida';

  lataMililitros = new FormControl(269);

  lataQuantidade = new FormControl(1);

  lataPreco = new FormControl();

  resultado: any;

  lataTamanhos: Array<{ nome: string, tamanho: number }> = [
    { nome: 'Latinha', tamanho: 269 },
    { nome: 'Lata', tamanho: 350 },
    { nome: 'LongNeck', tamanho: 355 },
    { nome: 'Latão', tamanho: 550 },
    { nome: 'Garrafa', tamanho: 600 },
    { nome: 'Litrão', tamanho: 1000 }
  ];

  ngOnInit() {
    this.lataMililitros.valueChanges.subscribe(this.checkFormFinished);
    this.lataQuantidade.valueChanges.subscribe(this.checkFormFinished);
    this.lataPreco.valueChanges.subscribe(this.checkFormFinished);
  }

  checkFormFinished = () => {

    if (this.lataMililitros.value && this.lataQuantidade.value && this.lataPreco.value) {

      const lataMililitrosTotal = this.lataMililitros.value * this.lataQuantidade.value;

      const preview = this.lataPreco.value * 1000 / lataMililitrosTotal;

      this.resultado = preview.toFixed(2).replace('.', ',');

    } else {

      this.resultado = false;

    }
  }


}
