define(['performer'],function(Performer) {


  describe('Performer.Serializer', function() {

    it('should be defined', function() {
      expect(Performer.Serializer).toBeDefined();
    });

    describe('attr_html', function() {

      var form,serialize;
      beforeEach(function() {
        form = new Performer.Form();
        serialize = new Performer.Serializer.standard();
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

  /*
  /*
    describe('Standard', function() {

      var serializer;
      beforeEach(function() {
        serialize = new Performer.Serializer.standard();
      });

      it('should convert Tag ', function() {


      });

      it('should convert arrays of tags', function() {

        var form = new Performer.Form();



      });

    });

  });
      tag1 = new Performer.Tag(form,'input',{className:"test",type:'text'});
      tag2 = new Performer.Tag(form,'textarea',{className:"notes"});
      input = new Performer.Tag(form,'input',);
      */