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
      tag = new Performer.Tag('email', '', data);
    });

    it('should be defined', function() {
      expect(Performer.Transform.Wrap).toBeDefined();
    });

    describe('fieldset', function() {
      it('should wrap input.read() with <fieldset></fieldset> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.fieldset;
        wrap(tag);
        expect(tag.read()).toEqual("<fieldset></fieldset>");
      });
    });

    describe('label', function() {
      it('should wrap input.read() with <label></label> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.label;
        wrap(tag);
        expect(tag.read()).toEqual("<label></label>");
      });
    });

    describe('ul', function() {
      it('should wrap input.read() with <ul></ul> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.ul;
        wrap(tag);
        expect(tag.read()).toEqual("<ul></ul>");
      });
    });

    describe('ol', function() {
      it('should wrap input.read() with <ol></ol> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.ol;
        wrap(tag);
        expect(tag.read()).toEqual("<ol></ol>");
      });
    });

    describe('li', function() {
      it('should wrap input.read() with <li></li> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.li;
        wrap(tag);
        expect(tag.read()).toEqual("<li></li>");
      });
    });

    describe('div', function() {
      it('should wrap input.read() with <div></div> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.div;
        wrap(tag);
        expect(tag.read()).toEqual("<div></div>");
      });
    });

    describe('p', function() {
      it('should wrap input.read() with <p></p> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.p;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<p></p>");
      });
    });

    describe('span', function() {
      it('should wrap input.read() with <span></span> and pass the result into input.write()', function() {
        var wrap = Performer.Transform.Wrap.span;
        wrap(tag, tag);
        expect(tag.read()).toEqual("<span></span>");
      });
    });

  });
});
