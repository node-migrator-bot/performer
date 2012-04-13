// needs more testing
define(['performer'],function(Performer) {
  describe('Performer.Transformer', function() {

    it('should be defined', function() {
      expect(Performer.Transformer).toBeDefined();
    });

    it('instances should run invoke with Performer.Helpers as context', function() {
      var helpers;
      var test = new Performer.Transformer(function(input){
        helpers = this;
      });
      test.invoke(new Performer.Tag());
      expect(helpers).toEqual(Performer.Helpers);
    });

  });
});
