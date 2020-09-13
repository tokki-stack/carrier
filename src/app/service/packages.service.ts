import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { result } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }
  baseURL = environment.baseURL;

  createNewPackage(_package) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/createNewPackage', { _package: _package })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getAllPackages() {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseURL + '/packages/getAllPackages')
        .subscribe(
          async json => {
            await this.getTracking(json)
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getPackagesByOrderID(idorders) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/getPackagesByOrderID', { idorders: idorders })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getCustomerByorderID(idorders) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/getCustomerByorderID', { idorders: idorders })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getMessengerByorderID(idorders) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/getMessengerByorderID', { idorders: idorders })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  updatePackage(_package) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/updatePackage', { _package: _package })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  deletePackage(_package) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/deletePackage', { _package: _package })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  setPackageStatus(_package, status, idmessenger) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/setPackageStatus', { _package: _package, status: status })
        .subscribe(
          async json => {
            await this.packageLog(_package.idpackages, status, idmessenger).then(result => {
            })
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  packageLog(idpackages, status, idmessengers) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/packageLog', { idpackages: idpackages, status: status , idmessengers: idmessengers})
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getPackageLog(idpackages) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/getPackageLog', { idpackages: idpackages})
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getPackageByidpackages(idpackages) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseURL + '/packages/getPackageByidpackages', { idpackages: idpackages })
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
  }



  getTracking(json) {
    var i = 0;
    json.map(result => {
      var tempTracking = "H"
      for (var j = 0; j < (6 - json[i].idpackages.toString().length); j++) {
        tempTracking = tempTracking + '0';
      }
      json[i].tracking = tempTracking + json[i].idpackages;
      i++;
    })
  }

}
