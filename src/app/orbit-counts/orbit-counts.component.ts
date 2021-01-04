import { ThrowStmt, TypeScriptEmitter } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent {
  @Input() satellites: Satellite[];
  typeArray: any=[];
  constructor() { }
  types(){
    for(let i=0;i<this.satellites.length;i++){
      if(!this.typeArray.includes(this.satellites[i].type))
      {
        this.typeArray.push(this.satellites[i].type);
      }
    }
    return this.typeArray;
  }
  typeCounts(){
    let map = new Map();
    let count:number=0;
    for(let i=0;i<this.typeArray.length;i++){
      count=0;
      for(let j=0;j<this.satellites.length;j++){
        if(this.typeArray[i].includes(this.satellites[j].type)){
          count++;  
        }
      }
      map.set(this.typeArray[i],count);
    }
    return map;
  }
  
  ngOnInit() {
  }

}
