class Plan {
  constructor() {
    this.planType = "";
  }

  set(type) {
    this.planType = type;
  }

  get() {
    return this.planType;
  }
}

module.exports = {
  Plan: Plan,
};
