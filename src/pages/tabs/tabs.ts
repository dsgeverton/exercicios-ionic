import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListaPage } from '../lista/lista';
import { CalculadoraPage } from '../calculadora/calculadora';
import { CardPage } from '../card/card';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaPage;
  tab2Root = CalculadoraPage;
  tab3Root = CardPage;

  constructor() {

  }
}
