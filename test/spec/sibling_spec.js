define(['performer'],function(Performer) {
  describe('Performer.Transformer.Sibling', function() {

    beforeEach(function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'email',
          className: 'test'
        }
      };
      tag = new Performer.Tag('email', '', data);
    });

    it('should be defined', function() {
      expect(Performer.Transformer.Sibling).toBeDefined();
    });

  });
});
