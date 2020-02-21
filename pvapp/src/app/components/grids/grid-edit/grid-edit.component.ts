import { Component, OnInit } from '@angular/core';
import { IGrid } from '../../shared/models/grid.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GridService } from 'src/app/core/services/grid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-edit',
  templateUrl: './grid-edit.component.html',
  styleUrls: ['./grid-edit.component.css']
})
export class GridEditComponent implements OnInit {

  gridEditForm: FormGroup;
  grid: IGrid;
  id: string;

  constructor(private fb: FormBuilder, private gridService: GridService, private router: Router, private route: ActivatedRoute, ) {  }
 
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.gridService.getDetails(this.id).subscribe(data => {
        this.grid = data;
        this.gridEditForm = this.fb.group({
          name: [this.grid.name, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
          authorId: [this.grid.authorId, [Validators.required]],
          
          highVoltageTransmission: [this.grid.highVoltageTransmission, [Validators.required, Validators.min(0)]],
          highVoltageAccess: [this.grid.highVoltageAccess, [Validators.required, Validators.min(0)]],
          
          middleVoltageTransmissionBusiness: [this.grid.middleVoltageTransmissionBusiness, [Validators.required, Validators.min(0)]],
          middleVoltageAccessBusiness: [this.grid.middleVoltageAccessBusiness, [Validators.required,Validators.min(0)]],
          lowVoltageTransmissionBusiness: [this.grid.lowVoltageTransmissionBusiness, [Validators.required, Validators.min(0)]],
          lowVoltageAccessBusiness: [this.grid.lowVoltageAccessBusiness, [Validators.required, Validators.min(0)]],

          middleVoltageTransmission: [this.grid.middleVoltageTransmission, [Validators.required, Validators.min(0)]],
          middleVoltageAccess: [this.grid.middleVoltageAccess, [Validators.required, Validators.min(0)]],
          lowVoltageTransmission: [this.grid.lowVoltageTransmission, [Validators.required, Validators.min(0)]],
          lowVoltageAccess: [this.grid.lowVoltageAccess, [Validators.required,Validators.min(0)]],
        });
      })
    })

  }


  get name() { return this.gridEditForm.get('name'); }
  get authorId() { return this.gridEditForm.get('authorId'); }
  get highVoltageTransmission() { return this.gridEditForm.get('highVoltageTransmission'); }
  get highVoltageAccess() { return this.gridEditForm.get('highVoltageAccess'); }
  get middleVoltageTransmissionBusiness() { return this.gridEditForm.get('middleVoltageTransmissionBusiness'); }
  get middleVoltageAccessBusiness() { return this.gridEditForm.get('middleVoltageAccessBusiness'); }
  get lowVoltageTransmissionBusiness() { return this.gridEditForm.get('lowVoltageTransmissionBusiness'); }
  get lowVoltageAccessBusiness() { return this.gridEditForm.get('lowVoltageAccessBusiness'); }
  get middleVoltageTransmission() { return this.gridEditForm.get('middleVoltageTransmission'); }
  get middleVoltageAccess() { return this.gridEditForm.get('middleVoltageAccess'); }
  get lowVoltageTransmission() { return this.gridEditForm.get('lowVoltageTransmission'); }
  get lowVoltageAccess() { return this.gridEditForm.get('lowVoltageAccess'); }
  

  editGrid() {
    const valueForm = this.gridEditForm.value;
    const id = this.route.snapshot.paramMap.get('id');
    this.gridService.editGrid(valueForm, id).subscribe((data) => {
      this.router.navigate(['/grids']);
    })

  }

}
