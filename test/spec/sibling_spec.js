define(['performer'],function(Performer) {
  describe('Performer.Transform.Sibling', function() {

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
      expect(Performer.Transform.Sibling).toBeDefined();
    });

  });
});
