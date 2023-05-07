import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  alreadySnapped!: boolean
  @Input('faceSnap')  faceSnap!: FaceSnap

  constructor(private faceSnapService: FaceSnapsService, private router: Router){}
  
  ngOnInit(): void {
    this.alreadySnapped=false
  }

  onAddSnap(){
    if(!this.alreadySnapped){
      // this.faceSnap.snaps++
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id,true)
      this.alreadySnapped=true
    }else{
      // this.faceSnap.snaps--
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id,false)
      this.alreadySnapped=false
    }
  }

  getColor(){
    return `rgb(0,${this.faceSnap.snaps<256 ? this.faceSnap.snaps : 255},0)`
  }

  onContinue(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
