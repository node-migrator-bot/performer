define(['performer'],function(Performer) {

  describe('Performer.Serializer', function() {

    it('should be defined', function() {
      expect(Performer.Serializer).toBeDefined();
    });

    describe('Standard', function() {

      it('should convert Tag instances', function() {

        var form = new Performer.Form();
        var tag = new Performer.Tag(form,'input',{className:"test",type:'text',what:null});

      });

      it('should convert arrays of tags', function() {

        var form = new Performer.Form();
        var tag1 = new Performer.Tag(form,'input',{className:"test",type:'text',what:null});
        var tag2 = new Performer.Tag(form,'textarea',{className:"notes"});
        var serialize = new Performer.Serializer.standard();

        console.log(serialize.invoke([tag1,tag2]));

      });

    });

  });

});