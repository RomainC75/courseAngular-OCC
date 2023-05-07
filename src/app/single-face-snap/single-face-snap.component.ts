import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent {
  alreadySnapped!: boolean;
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alreadySnapped = false;
    const id:number = Number(this.route.snapshot.params['id'])
    this.faceSnap = this.faceSnapService.getFaceSnapById(id);
  }

  onAddSnap() {
    if (!this.alreadySnapped) {
      // this.faceSnap.snaps++
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id,true)
      this.alreadySnapped = true;
    } else {
      // this.faceSnap.snaps--
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      // this.faceSnapService.snapFaceSnapById(this.faceSnap.id,false)
      this.alreadySnapped = false;
    }
  }

  getColor() {
    return `rgb(0,${this.faceSnap.snaps < 256 ? this.faceSnap.snaps : 255},0)`;
  }

  onBack(){
    this.router.navigateByUrl('facesnaps')
  }
}
