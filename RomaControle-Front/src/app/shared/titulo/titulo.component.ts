import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
})
export class TituloComponent implements OnInit {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() iconClass!: string;
  @Input() listarButton!: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  //func that remove spaces in the string and set to lowercase
  public formatString(str: string) {
    return str.replace(/\s/g, '').toLowerCase();
  }

  //list all itens based on the input titulo
  public listAllItens() {
    var tituloFmt = this.formatString(this.titulo);
    this.router.navigate([`/${tituloFmt}/lista`]);
  }
}
