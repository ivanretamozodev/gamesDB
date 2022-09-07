import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable, observable, tap } from 'rxjs';
import { PlatformResult, PlatfotmResponse } from '../interfaces/Platform.interface';

@Injectable({
    providedIn: 'root'
})
export class PlatformService {
    private readonly apiKey = environment.apiKey;
    private readonly baseUrl = environment.baseUrl;

    constructor(private _http: HttpClient) {}

    getAllPlatforms$() {
        return this._http
            .get<PlatfotmResponse>(`${this.baseUrl}/platforms/lists/parents?key=${this.apiKey}`)
            .pipe(
                map((response) => {
                    return response.results;
                }),
                map((results) => results.slice(0, 8))
            );
    }
}
