import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';
import { Observable } from 'rxjs';
import { IGrid } from 'src/app/components/shared/models/grid.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_GRIDS = `${this.BASE_URL}/grids`;
  private readonly CREATE_GRID = `${this.BASE_URL}/grids`;

  constructor(private http: HttpClient)  { }

  getAll(): Observable<Array<IGrid>> {
    return this.http.get<Array<IGrid>>(this.ALL_GRIDS);
  }

  
  createGrid(body: Object) {
    return this.http.post(this.CREATE_GRID, body);
  }

  getDetails(id: string): Observable<IGrid> {
    return this.http.get<IGrid>(this.CREATE_GRID + `/${id}`);
  }

  editGrid(body: Object, id: string) {
    return this.http.put(this.CREATE_GRID + `/${id}`, body);
  }

  deleteGrid(id: string) {
    return this.http.delete(this.CREATE_GRID + `/${id}`);
  }

}
