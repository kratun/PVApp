import { Component, OnInit } from '@angular/core';
import { IGrid } from '../../shared/models/grid.model';
import { GridService } from 'src/app/core/services/grid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-all',
  templateUrl: './grid-all.component.html',
  styleUrls: ['./grid-all.component.css']
})
export class GridAllComponent implements OnInit {

  Grids: Object[];

  constructor(private gridService: GridService, private router: Router) { }
  allGrids: Array<IGrid>;
  
  ngOnInit() {
    this.gridService.getAll().subscribe(data => {
      console.log(data);
      this.allGrids = data;
    })
  }
}
