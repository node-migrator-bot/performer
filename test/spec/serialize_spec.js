define(['performer'],function(Performer) {


  describe('Performer.Transform.Serialize', function() {

    it('should be defined', function() {
      expect(Performer.Transform.Serialize).toBeDefined();
    });

    describe('attr_html', function() {

      var form,serialize;
      beforeEach(function() {
        form = new Performer.Form();
        serialize = new Performer.Transform.Serialize.standard();
      });

      it('should convert attributes object of a tag into html tag key-value pairs', function() {
        var input = new Performer.Tag(form,'input',{className:"test",type:'text'});
        expect(serialize.attr_html(input)).toEqual('class="test" type="text"');
      });

      it('should ignore empty attributes', function() {
        var input = new Performer.Tag(form,'input',{attr1:[],attr2:'',attr3:null});
        expect(serialize.attr_html(input)).toEqual('');
      });

    });

  });

});