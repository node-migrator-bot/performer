define(['performer'], function(Performer) {
  describe('Performer.Pipeline', function() {

    var pipeline;
    beforeEach(function(){
      function wrap(input, helpers) {
        return input.write('START'+input.read()+'END');
      }
      pipeline = new Performer.Pipeline([wrap]);
    });

    it('should be defined', function() {
      expect(Performer.Pipeline).toBeDefined();
    });

    it('should be able to transform a Tag instance with a pipeline',function() {
      var tag = new Performer.Tag();
      tag.write('tag');
      expect(pipeline.invoke(tag)).toEqual('STARTtagEND');
    });

  });
});
