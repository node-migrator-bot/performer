define(['performer'], function(Performer) {

  describe("Helpers", function() {

    it('should be defined', function() {
      expect(Performer.Helpers).toBeDefined();
    });

    describe("attr_html", function(){

      it('should convert objects into html tag key-value pairs', function() {
        var data = {
          type: 'text',
          className: 'email'
        };
        var result = Performer.Helpers.attr_html(data);
        expect(result).toEqual('type="text" class="email"');
      });

      it('should ignore empty attributes', function() {
        var data = {
          type: 'text',
          className: 'email',
          attr1: [],
          attr2: '',
          attr3: null
        };
        var result = Performer.Helpers.attr_html(data);
        expect(result).toEqual('type="text" class="email"');
      });

    });
  });

});
