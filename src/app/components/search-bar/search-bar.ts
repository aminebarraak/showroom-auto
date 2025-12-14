import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../Interfaces/auto';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [CurrencyPipe],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
@Input()  autos:Auto[]=[]
@Output() onSelectAuto=new EventEmitter<Auto>()


selectedAutos:Auto[]=[]
selectAutoList(brand:string){
  this.selectedAutos= this.autos.filter(x=>
  x.brand.toLowerCase().startsWith(brand.toLowerCase()))

}
showDetails(auto:Auto){
  this.onSelectAuto.emit(auto)

}
autoCardBody(){
    return {'card-body':true,'test':true}
}

}
