define(['performer'],function(Performer) {

  describe('Performer.Form', function() {

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should have a default serializer', function() {
      var form = new Performer.Form();
      expect(form.serializer).toBeDefined();
    });

    it('should have a default wrapper', function() {
      var form = new Performer.Form();
      expect(form.wrapper).toBeDefined();
    });

  });

});