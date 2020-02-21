import { Component, OnInit } from '@angular/core';
import { IGrid } from '../../shared/models/grid.model';
import { GridService } from 'src/app/core/services/grid.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-grid-all',
  templateUrl: './grid-all.component.html',
  styleUrls: ['./grid-all.component.css']
})
export class GridAllComponent implements OnInit {

  Grids: Object[];

  get isAdmin(): boolean {
    return this.authService.isAdministrator();
  }

  constructor(
    private gridService: GridService, 
    private router: Router, 
    private authService: AuthService,
    ) { }
  allGrids: Array<IGrid>;
  
  ngOnInit() {
    this.gridService.getAll().subscribe(data => {
      this.allGrids = data;
    })
  }

  deleteGrid(id: string) {
    this.gridService.deleteGrid(id)
      .subscribe(() => {
        this.router.navigate(['/grids']);
      })
  }
}
