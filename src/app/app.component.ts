import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap1!: FaceSnap
  mySnap2!: FaceSnap
  mySnap3!: FaceSnap
  constructor(){ }

  ngOnInit(){
    this.mySnap1 = new FaceSnap(
      "Archibald",
      "Super",
      new Date(),
      5,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HjaXYfBJyxxdFySFZfbZ373t4Yw9mIcuPA&usqp=CAU",
    )
    this.mySnap2 = new FaceSnap(
      "Boby",
      "Genial",
      new Date(),
      23,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HjaXYfBJyxxdFySFZfbZ373t4Yw9mIcuPA&usqp=CAU",
    )
    this.mySnap3 = new FaceSnap(
      "mlkjqdsf",
      "Super-top",
      new Date(),
      34,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HjaXYfBJyxxdFySFZfbZ373t4Yw9mIcuPA&usqp=CAU",
    )
  }
}
