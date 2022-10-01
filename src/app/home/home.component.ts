import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { error } from 'console';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: any;
  details :any;
  constructor(private Service:ServiceService) { }

  ngOnInit(): void {
  }

  getDetails(){
    this.subscription = this.Service.getData().subscribe(data=>{
    console.log("Existing datas...",data);
      this.details = data

  })
}
// ngOnDestroy(){
//   console.log("unsubscribe..")
//   this.subscription.unsubscribe();
// }

// test(){
//   const myObservable = of(1,2,3,4)
//   const myObserver = {
//     next : (x:number) => console.log("Number...",x),

//     complete: ()=>console.log('Finished...'),

//   };

//   myObservable.subscribe(myObserver);
// }
datas(){

}



}
