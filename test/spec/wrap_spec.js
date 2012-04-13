define(['performer'],function(Performer) {
  describe('Performer.Transformers.Wrap', function() {

    var tag;
    beforeEach(function() {
      tag = new Performer.Tag();
    });

    it('should be defined', function() {
      expect(Performer.Transformers.Wrap).toBeDefined();
    });

    describe('fieldset', function() {
      it('should wrap input.read() with <fieldset></fieldset> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.fieldset;
        expect(transform.invoke(tag)).toEqual("<fieldset></fieldset>");
      });
    });

    describe('label', function() {
      it('should wrap input.read() with <label></label> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.label;
        expect(transform.invoke(tag)).toEqual("<label></label>");
      });
    });

    describe('ul', function() {
      it('should wrap input.read() with <ul></ul> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.ul;
        expect(transform.invoke(tag)).toEqual("<ul></ul>");
      });
    });

    describe('ol', function() {
      it('should wrap input.read() with <ol></ol> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.ol;
        expect(transform.invoke(tag)).toEqual("<ol></ol>");
      });
    });

    describe('li', function() {
      it('should wrap input.read() with <li></li> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.li;
        expect(transform.invoke(tag)).toEqual("<li></li>");
      });
    });

    describe('div', function() {
      it('should wrap input.read() with <div></div> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.div;
        expect(transform.invoke(tag)).toEqual("<div></div>");
      });
    });

    describe('p', function() {
      it('should wrap input.read() with <p></p> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.p;
        expect(transform.invoke(tag)).toEqual("<p></p>");
      });
    });

    describe('span', function() {
      it('should wrap input.read() with <span></span> and pass the result into input.write()', function() {
        var transform = Performer.Transformers.Wrap.span;
        expect(transform.invoke(tag)).toEqual("<span></span>");
      });
    });

  });
});
