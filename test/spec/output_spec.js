define(['performer'],function(Performer) {

  describe('Performer.Output', function() {

    it('should be defined', function() {
      expect(Performer.Output).toBeDefined();
    });

    it('should allow a value to be written to it', function() {
      var output = new Performer.Output();
      output.write('test');
      expect(output.read()).toEqual('test');
    });

  });
});