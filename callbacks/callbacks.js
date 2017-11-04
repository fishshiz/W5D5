class Clock {
  constructor() {
    const newTime = new Date();
    this.h = newTime.getHours();
    this.m = newTime.getMinutes();
    this.s = newTime.getSeconds();
    // this.printTime();
    this._tick = this._tick.bind(this);
    setInterval(this._tick, 1000);
  }

  printTime(){
    console.log(`${this.h}:${this.m}:${this.s}`);
  }

  _tick(){
    this.s += 1;
    if (this.s >= 60) {
      this.s = 0;
      this.m += 1;
      if (this.m >= 60) {
        this.m = 0;
        this.h += 1;
        if (this.h >= 24) {
          this.h = 0;
        }
      }
    }
    this.printTime();
  }
}
const clock = new Clock();
