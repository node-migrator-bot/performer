define(['performer'],function(Performer) {

  describe('Performer.Transform.Serialize', function() {

    it('should be defined', function() {
      expect(Performer.Transform.Serialize).toBeDefined();
    });

    describe('attr_html', function() {
      var form, serialize;
      beforeEach(function() {
        form = new Performer.Form();
        serialize = Performer.Transform.Serialize.standard;
      });
    });

  });
});