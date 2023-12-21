import { Component } from '@angular/core';
let heroeCount =2;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*title = 'la tour des 1 heros';*/
  titlestyle = {'font-family' : 'Arial', 'font-size' : '2rem'};
  username = 'anonymous';
  heroe =['Batman','Superman','Wonder-Woman','IronMan'];
  heroToAdd = '';
  mechants = ['kang','joker'];
  mechantToAdd = '';
  AddHero(){
    this.heroe.push(this.heroToAdd);

//this.title = 'La tour des ' + this.heroe.length + ' héros';

  //this.title = 'La tour des' + (heroeCount++) + 'heros';
}
AddMechant(){
  this.mechants.push(this.mechantToAdd);
}
}

