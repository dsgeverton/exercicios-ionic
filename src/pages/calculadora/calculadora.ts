import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {

  private calc: FormGroup;
  public valorA: number;
  public valorB: number;
  public operacao: string;
  public resultado: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.calc = this.formBuilder.group({
      valorA: ['', Validators.required],
      valorB: ['', Validators.required],
      operacao: ['', Validators.required],
      resultado: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  logForm(form) {
    this.valorA = parseFloat(form.value.valorA);
    this.valorB = parseFloat(form.value.valorB);
    this.operacao = form.value.operacao;
    console.log("FORM RECEBIDO:   " + form.value.valorA);
    console.log("FORM RECEBIDO:   " + form.value.valorB);
    console.log("FORM RECEBIDO:   " + form.value.operacao);
  }

  public calcular(): number {

    switch (this.operacao) {
      case "+":
        this.resultado = this.valorA + this.valorB;
        break;

      case "-":
        this.resultado = this.valorA - this.valorB;
        break;

      case "*":
        this.resultado = this.valorA * this.valorB;
        break;

      case "/":
        if(this.valorB <= 0.0){
          console.log("Valor inválido para divisão");
        } else{
          this.resultado = this.valorA / this.valorB;
        }
        break;
    }

    return this.resultado;
  }


}
