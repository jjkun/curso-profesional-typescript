import { HttpClient } from "../utils/http-client";
import { AxiosPromise } from "axios";
import { SignalTypeResponse } from "../models/signals-response";
import { ApiConfig } from "../config/api-config";

export class SignalServices {
    private serviceURL: string = `${ApiConfig.BASE_URL}:${ApiConfig.BASE_PORT}/traffic-signals/v1/signals`;
    private _http:HttpClient;
    constructor() {
        this._http = new HttpClient();
    }
    getSignals(): AxiosPromise<SignalTypeResponse> {
        return this._http.get(this.serviceURL);
    }
}