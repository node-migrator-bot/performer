define(['performer'],function(Performer) {
  describe('Performer.Transform.Wrap', function() {

    beforeEach(function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'email',
          className: 'test'
        }
      };
      tag = new Performer.Tag('email', data);
    });

    it('should be defined', function() {
      expect(Performer.Transform.Wrap).toBeDefined();
    });

    describe('li', function() {
      it('should wrap input.read() with <li></li> and pass the result into output.write()', function() {
        var wrap = Performer.Transform.Wrap.li;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<li></li>");
      });
    });

    describe('div', function() {
      it('should wrap input.read() with <div></div> and pass the result into output.write()', function() {
        var wrap = Performer.Transform.Wrap.div;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<div></div>");
      });
    });

    describe('p', function() {
      it('should wrap input.read() with <p></p> and pass the result into output.write()', function() {
        var wrap = Performer.Transform.Wrap.p;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<p></p>");
      });
    });

    describe('span', function() {
      it('should wrap input.read() with <span></span> and pass the result into output.write()', function() {
        var wrap = Performer.Transform.Wrap.span;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<span></span>");
      });
    });

  });
});