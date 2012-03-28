define(['performer'],function(Performer) {

  describe('Performer.Tag', function() {

    it('should be defined', function() {
      expect(Performer.Tag).toBeDefined();
    });

    it('should convert attributes object of a tag into html tag key-value pairs', function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'text',
          className: 'email'
        }
      };
      var input = new Performer.Tag('test',data);
      expect(input.attr_html()).toEqual('type="text" class="email"');
    });

    it('should ignore empty attributes', function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'text',
          className: 'email',
          attr1: [],
          attr2: '',
          attr3: null
        }
      };
      var input = new Performer.Tag('input',data);
      expect(input.attr_html()).toEqual('type="text" class="email"');
    });

  });
});