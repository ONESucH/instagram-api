export class ServiceUserData {

  Data;

  constructor() {}

  getUserData(data) {
    this.Data = data;
  }

  get moreData(): [ServiceUserData] {
    return this.Data;
  }
}
