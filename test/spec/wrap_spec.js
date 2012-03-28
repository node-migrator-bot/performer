define(['performer'],function(Performer) {

  describe('Performer.Transform.Wrap', function() {

    var form,tag;
    beforeEach(function() {
      form = new Performer.Form();
      tag = new Performer.Tag('input');
    });

    it('should be defined', function() {
      expect(Performer.Transform.Wrap).toBeDefined();
    });

    describe('li', function() {

      it('should wrap input.read() with <li></li> and pass the result into output.write()', function() {
        var wrap = new Performer.Transform.Wrap.li();
        wrap.invoke(tag,tag);
        expect(tag.read()).toEqual("<li></li>");
      });

    });

    describe('div', function() {

      it('should wrap input.read() with <div></div> and pass the result into output.write()', function() {
        var wrap = new Performer.Transform.Wrap.div();
        wrap.invoke(tag,tag);
        expect(tag.output).toEqual("<div></div>");
      });

    });

    describe('p', function() {

      it('should wrap input.read() with <p></p> and pass the result into output.write()', function() {
        var wrap = new Performer.Transform.Wrap.p();
        wrap.invoke(tag,tag);
        expect(tag.output).toEqual("<p></p>");
      });

    });

    describe('span', function() {

      it('should wrap input.read() with <span></span> and pass the result into output.write()', function() {
        var wrap = new Performer.Transform.Wrap.span();
        wrap.invoke(tag,tag);
        expect(tag.output).toEqual("<span></span>");
      });

    });

  });

});