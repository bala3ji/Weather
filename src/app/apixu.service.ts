import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
        'https://api.weatherstack.com/current?access_key=ab48a76276b31522b2f82c9ef22ccc90&query=' + location
    );
}

}
