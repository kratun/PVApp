import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGrid } from '../../shared/models/grid.model';
import { GridService } from 'src/app/core/services/grid.service';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

  private readonly defaultValue: number = 0;
  gridCreateForm: FormGroup;

  constructor(private fb: FormBuilder, private gridService: GridService, private router: Router) { }

  ngOnInit() {
    this.gridCreateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      highVoltageTransmission: [this.defaultValue, [Validators.required, Validators.min(0)]],
      highVoltageAccess: [this.defaultValue, [Validators.required, Validators.min(0)]],
      
      middleVoltageTransmissionBusiness: [this.defaultValue, [Validators.required, Validators.min(0)]],
      middleVoltageAccessBusiness: [this.defaultValue, [Validators.required,Validators.min(0)]],
      lowVoltageTransmissionBusiness: [this.defaultValue, [Validators.required, Validators.min(0)]],
      lowVoltageAccessBusiness: [this.defaultValue, [Validators.required, Validators.min(0)]],

      middleVoltageTransmission: [this.defaultValue, [Validators.required, Validators.min(0)]],
      middleVoltageAccess: [this.defaultValue, [Validators.required, Validators.min(0)]],
      lowVoltageTransmission: [this.defaultValue, [Validators.required, Validators.min(0)]],
      lowVoltageAccess: [this.defaultValue, [Validators.required,Validators.min(0)]],
    })
  }

  gridCreate() {
    let gridDb = (this.gridCreateForm.value) as IGrid
    gridDb.authorId = localStorage.getItem('userId');
    
    console.log(this.gridCreateForm.value);
    console.log(gridDb);
    this.gridService.createGrid(gridDb).subscribe((data) => {
      this.router.navigate(['/grids'])
    })
  }

}
