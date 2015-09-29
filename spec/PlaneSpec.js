describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('is flying when created', function() {
    expect(plane.isFlying).toBe(true);
  });

  it('can land', function() {
    plane.land();
    expect(plane.isFlying).toBe(false)
  });

  it('can take off', function() {
    plane.takeOff();
    expect(plane.isFlying).toBe(true)
  });

});
