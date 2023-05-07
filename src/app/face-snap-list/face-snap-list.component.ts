import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  mySnaps!: FaceSnap[]
  constructor(private faceSnapService: FaceSnapsService){}
  ngOnInit(){
    // this.mySnaps=this.faceSnapService.mySnaps
    this.mySnaps = this.faceSnapService.getAllFaceSnaps()
  }
}
