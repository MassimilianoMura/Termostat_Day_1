describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has temperature value', function() {

    it('and start/default is 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('you can increase the temp', function() {
      Thermostat.prototype.increaseTemperature()
      expect(thermostat.temperature).toEqual(21)
    });

    it('you can decrease the temp', function() {
      Thermostat.prototype.temperature = 30;
      Thermostat.prototype.decreaseTemperature()
      expect(thermostat.temperature).toEqual(29)
    });

    it('minimum temperature is 10 degrees', function () {
      Thermostat.prototype.temperature = 11;
      Thermostat.prototype.decreaseTemperature()
      Thermostat.prototype.decreaseTemperature()
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('has power save mode', function() {

    it('which has maximum temperature of 25 degrees when on', function() {
      Thermostat.prototype.temperature = 24;
      Thermostat.prototype.increaseTemperature()
      Thermostat.prototype.increaseTemperature()
      expect(thermostat.temperature).toEqual(25);
    });

    it('which has maximum temperature of 32 degrees when off', function() {
      Thermostat.prototype.changePowerSaveMode()
      Thermostat.prototype.temperature = 31;
      Thermostat.prototype.increaseTemperature()
      Thermostat.prototype.increaseTemperature()
      expect(thermostat.temperature).toEqual(32);
    });

  });

    it('can reset the temperature to 20 degrees', function() {
    Thermostat.prototype.resetTemperature()
    expect(thermostat.temperature).toEqual(20);
  });


});