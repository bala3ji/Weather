import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=09133156e084391949d67afe2ae9eb63&units=metric'
    );
}

}
