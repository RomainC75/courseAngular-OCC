import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  alreadySnapped!: boolean
  @Input('faceSnap')  faceSnap!: FaceSnap
  
  ngOnInit(): void {
    this.alreadySnapped=false
  }

  onAddSnap(){
    if(!this.alreadySnapped){
      this.faceSnap.snaps++
      this.alreadySnapped=true
    }else{
      this.faceSnap.snaps--
      this.alreadySnapped=false
    }
  }
}
