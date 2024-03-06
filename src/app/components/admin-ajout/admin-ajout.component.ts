import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import { Voyage } from '../../models/voyage';
import { VoyageForm } from '../../models/voyage-form';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Images } from '../../models/images';
import { VoyageService } from '../../services/voyage.service';
import { VoyageFormService } from '../../services/voyage-form.service';
import {MatSelectModule} from '@angular/material/select';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-admin-ajout',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, 
            MatInputModule, FormsModule, ReactiveFormsModule, 
            MatSelectModule, MatButton],
  templateUrl: './admin-ajout.component.html',
  styleUrl: './admin-ajout.component.css'
})
export class AdminAjoutComponent implements OnInit {
  voyage:VoyageForm = new VoyageForm();
  types:string[] = ["Mer", "Montagne", "Campagne"]

  constructor(private router: Router, private voyageService: VoyageService, private voyageformService: VoyageFormService ){

  }

  ngOnInit(): void {
    
  }
  
  add_voyage(): void{
    console.log('ok')
    this.voyageService.add(this.voyage).subscribe(data => {
      this.router.navigate(['/admin']);
    }, error =>{})
  }
}
