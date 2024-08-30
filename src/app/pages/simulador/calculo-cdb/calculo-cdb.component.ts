import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalculoCdbService } from 'src/app/services/calculo-cdb.service';
import { FormsModule } from '@angular/forms';
import { CalculoCdbResponse } from 'src/app/models/CalculoCdb';

@Component({
    selector: 'app-calculo-cbd',
    templateUrl: './calculo-cdb.component.html',
    styleUrls: ['./calculo-cdb.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class CalculoCdbComponent implements OnInit {

  calculoResponse: CalculoCdbResponse | undefined;

  public valorInvestido : number = 0;
  public prazoMeses : number = 0;
  public materiaSelecionada: number = 0;
  @ViewChild('alert', { static: false }) modalContent: ElementRef | undefined;

  constructor(
    private calculoCdbService: CalculoCdbService,
    private modalService: NgbModal,
    ) { } 


  ngOnInit() {
  }

  openRegister(register:any) {
    this.modalService.open(register, { size: 'lg' });
  }

  CalcularCdb() {
    console.log(this.valorInvestido, this.prazoMeses);
    this.calculoCdbService.calcularCdb(this.valorInvestido, this.prazoMeses)
    .subscribe(data => {
      if(!data){
        this.openAlert();
      }
      console.log("Cadastrado");
      this.calculoResponse = JSON.parse(JSON.stringify(data));
      console.log(data);
    },
    error => this.openAlert()
    );
}

  openAlert() {
    this.modalService.open(this.modalContent, { size: 'sm' });
  }

  keyUpPrazo(event: any){
    this.prazoMeses = event.target.value;
  }

  keyUpAplicacao(event: any){
    this.valorInvestido = event.target.value;
  }  
}
