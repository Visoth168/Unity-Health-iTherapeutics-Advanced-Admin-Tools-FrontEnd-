import {Tblslideshow} from "../banner/tblslideshow";

export class TblBanner {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  // slideShows:Tblslideshow[];
  isSelected: boolean = false;

  constructor( id: number,name: string,startDate: string,endDate: string,isSelected:boolean=false){
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate
    this.isSelected = isSelected
  }
}
