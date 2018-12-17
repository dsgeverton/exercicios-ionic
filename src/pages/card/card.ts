import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  public pessoa = {
    matricula:'',
    nome:'',
    idade:0,
    curso:'',
    imageURL:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pessoa.nome = "Everton da Silva Gonçalves";
    this.pessoa.idade = 21;
    this.pessoa.matricula = "201521200068";
    this.pessoa.curso = "Sistemas de Informação";
    this.pessoa.imageURL = "../../assets/imgs/mario.jpg"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
