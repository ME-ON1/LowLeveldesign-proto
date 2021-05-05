class BussinessHours {
  #bussinessHours;
  constructor() {
    // this.#bussinessHours = "";
  }

  setBussinessHours(daysAndHoursDetails) {
    this.#bussinessHours = daysAndHoursDetails;
  }

  getBussinessHours(day) {
    // console.log(this.bussinessHours, "from hoeus");
    return this.#bussinessHours[day];
  }
}

module.exports = BussinessHours;
