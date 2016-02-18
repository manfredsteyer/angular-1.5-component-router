import { FlightService } from './flight-service';
import { Injectable } from 'angular2/core';
import { IFlight } from '../flight';

@Injectable()
export class FlightManager {

    constructor(private FlightService: FlightService) {
    }

    fluege: Array<IFlight> = [];

    load(von, nach) {
        this.FlightService
            .find(von, nach)
            .subscribe(
                fluege => {
                    this.fluege = fluege;
                },
                err => {
                    console.error("Fehler!");
                    console.error(err);
                }
            );
    }

}