export class Tblslideshow {
  id: number;
  name: string;
  active: string;
  startDate: string;
  endDate: string;
  constructor(  id: number,name: string,active: string,startDate: string,endDate: string){
    this.id = id;
    this.name = name;
    this.active = active;
    this.startDate = startDate;
    this.endDate = endDate
  }
}
