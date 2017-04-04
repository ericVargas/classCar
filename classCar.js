class Car {
  constructor(engine, color, model) {
    this.engine = engine;
    this.color = color;
    this.model = model;
    this.idle = false;
  }
  
  start() {
    console.log('Engine roars to life...*VROOOM!!!*');
    this.idle = true;
  }
  
  getIdle(){
    console.log('Your car is idle: ' + this.idle)
  }
  
  stop() {
    console.log('Engine dies down...*RRrr...*');
    this.idle = false;
    }
  
  getEngine(){
    console.log('The engine is a '+this.engine+', that sounds powerful.')
  }
  
  getColor() {
    console.log('Your car is '+ this.color+', nice color.')
  }
  
  getModel() {
    console.log(this.model+' is the model of this car, nice!')
  }
  
}

let lambo = new Car('V12', 'red', 'Aventador')

lambo.getEngine()

lambo.getColor()

lambo.getModel()

lambo.start()

lambo.getIdle()

lambo.stop()

lambo.getIdle()