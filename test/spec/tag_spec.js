define(['performer'],function(Performer) {

  describe('Performer.Tag', function() {

    var form;
    beforeEach(function() {
      form = new Performer.Form();
    });

    it('should be defined', function() {
      expect(Performer.Tag).toBeDefined();
    });

    it('should throw an error if no Form instance is passed', function() {
      var test = function() { new Performer.Tag(); };
      expect(test).toThrow(new Error("Tag must belong to an instance of Form."));
    });

  });

});