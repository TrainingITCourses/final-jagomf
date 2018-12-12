import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Status } from './models/status';
import { Launch } from './models/launch';

@Injectable({ providedIn: 'root' })
export class ProviderService {

  constructor(
    private http: HttpClient
  ) { }

  public getStatuses = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map(({ types }: { types: Status[] }) => types))

  public getLaunches = () =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map(({ launches }: { launches: Launch[] }) => launches))
}
