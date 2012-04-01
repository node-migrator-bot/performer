define(['performer'], function(Performer) {
  describe('Performer.Pipeline', function() {

    var pipeline;
    beforeEach(function(){
      pipeline = new Performer.Pipeline([Performer.Transform.Serialize.standard],[]);
    });

    it('should be defined', function() {
      expect(Performer.Pipeline).toBeDefined();
    });

    it('should be able to transform a Tag instance with a pipeline',function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'text',
          className: 'email'
        }
      };
      var tag = new Performer.Tag('test', '', data);
      expect(pipeline.tag(tag)).toEqual('<input type="text" class="email" id="test"/>');
    });

    describe("Helpers", function() {

      it('should be defined', function() {
        expect(Performer.Pipeline.Helpers).toBeDefined();
      });

      describe("attr_html", function(){

        it('should convert objects into html tag key-value pairs', function() {
          var data = {
            type: 'text',
            className: 'email'
          };
          var result = Performer.Pipeline.Helpers.attr_html(data);
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
          var result = Performer.Pipeline.Helpers.attr_html(data);
          expect(result).toEqual('type="text" class="email"');
        });

      });



    });


  });
});