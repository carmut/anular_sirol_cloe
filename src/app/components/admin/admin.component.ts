import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Voyage } from '../../models/voyage';
import { VoyageService } from '../../services/voyage.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Images } from '../../models/images';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  voyages?: Voyage[];
  loading = true;

  constructor(private router: Router, private voyageService: VoyageService){

  }

  ngOnInit(){
    this.voyageService.getAll().subscribe(data => {
      this.voyages = data;
      this.loading = false;
    });
  }

  suppr(id: any){
    this.voyageService.delete(id).subscribe(data => {
      window.location.reload();
    });
  }
}
