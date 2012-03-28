define(['performer'],function(Performer) {

  describe('Performer.Tag', function() {

    it('should be defined', function() {
      expect(Performer.Tag).toBeDefined();
    });

    it('should convert attributes object of a tag into html tag key-value pairs', function() {
      var input = new Performer.Tag('input',{className:"test",type:'text'});
      expect(input.attr_html()).toEqual('class="test" type="text"');
    });

    it('should ignore empty attributes', function() {
      var input = new Performer.Tag('input',{attr1:[],attr2:'',attr3:null});
      expect(input.attr_html()).toEqual('');
    });

  });

});