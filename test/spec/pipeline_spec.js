define(['performer'], function(Performer) {
  describe('Performer.Pipeline', function() {

    var pipeline;
    beforeEach(function(){
      pipeline = new Performer.Pipeline(
                       [Performer.Transform.Serialize.standard],
                       [Performer.Transform.Wrap.fieldset]
                     );
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
      var input = new Performer.Tag('test', data);
      expect(pipeline.tag(input)).toEqual('<input type="text" class="email" id="test"/>');
    });

    it('should be able to transform an Output instance with a pipeline',function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'text',
          className: 'email'
        }
      };
      var input = new Performer.Tag('test',data);
      expect(pipeline.tag(input)).toEqual('<input type="text" class="email" id="test"/>');
    });

  });
});