import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  endPoint: string = 'cars';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}${this.endPoint}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}${this.endPoint}/${id}`);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}${this.endPoint}/${car.id}`,
      car,
    );
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}${this.endPoint}/${id}`);
  }

  create(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}${this.endPoint}/${car.id}`,
      car,
    );
  }
}
