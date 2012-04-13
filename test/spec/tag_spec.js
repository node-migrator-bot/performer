// needs more testing
define(['performer'],function(Performer) {
  describe('Performer.Tag', function() {

    it('should be defined', function() {
      expect(Performer.Tag).toBeDefined();
    });

    it('should allow a value to be written to it', function() {
      var tag = new Performer.Tag();
      tag.write('test');
      expect(tag.read()).toEqual('test');
    });

  });
});
