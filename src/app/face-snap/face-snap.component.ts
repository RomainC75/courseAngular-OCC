import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  alreadySnapped!: boolean

  ngOnInit(): void {
    this.title = "Archibald"
    this.description = "Super"
    this.createdDate = new Date()
    this.snaps = 6
    this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HjaXYfBJyxxdFySFZfbZ373t4Yw9mIcuPA&usqp=CAU"
    this.alreadySnapped = false
  }

  onAddSnap(){
    if(!this.alreadySnapped){
      this.snaps++
      this.alreadySnapped=true
    }else{
      this.snaps--
      this.alreadySnapped=false
    }
  }
}
