import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { IGrid } from 'src/app/components/shared/models/grid.model';
import { GridService } from '../services/grid.service';

@Injectable({
    providedIn: 'root'
})
export class SingleGridResolver implements Resolve<IGrid> {
    constructor(private gridService: GridService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.gridService.getDetails(id);
    }
}