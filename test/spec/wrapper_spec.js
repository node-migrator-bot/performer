define(['performer'],function(Performer) {

  describe('Performer.Wrapper', function() {

    var tag;
    beforeEach(function() {
      tag = "<input/>";
    });

    it('should be defined', function() {
      expect(Performer.Wrapper).toBeDefined();
    });

    describe('standard/none', function() {

      it('should return a tag without wrapping it', function() {
        wrapper = new Performer.Wrapper.standard();
        expect(wrapper.invoke(tag)).toEqual(tag);
      });

    });

    describe('li', function() {

      it('should wrap a tag with <li></li>', function() {
        wrapper = new Performer.Wrapper.li();
        expect(wrapper.invoke(tag)).toEqual("<li>"+tag+"</li>");
      });

    });

    describe('div', function() {

      it('should wrap a tag with <div></div>', function() {
        wrapper = new Performer.Wrapper.div();
        expect(wrapper.invoke(tag)).toEqual("<div>"+tag+"</div>");
      });

    });

    describe('p', function() {

      it('should wrap a tag with <p></p>', function() {
        wrapper = new Performer.Wrapper.p();
        expect(wrapper.invoke(tag)).toEqual("<p>"+tag+"</p>");
      });

    });

    describe('span', function() {

      it('should wrap a tag with <span></span>', function() {
        wrapper = new Performer.Wrapper.span();
        expect(wrapper.invoke(tag)).toEqual("<span>"+tag+"</span>");
      });

    });

  });

});