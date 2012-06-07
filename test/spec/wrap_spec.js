define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Transformers.Wrap", {

    "setUp": function() {
      this.tag = new Performer.Tag();
    },

    "should be defined": function() {
      expect(Performer.Transformers.Wrap).toBeDefined();
    },

    "fieldset": {
      "should wrap input.read() with <fieldset></fieldset> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.fieldset;
        expect(transform.invoke(this.tag)).toEqual("<fieldset></fieldset>");
      }
    },

    "label": {
      "should wrap input.read() with <label></label> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.label;
        expect(transform.invoke(this.tag)).toEqual("<label></label>");
      }
    },

    "ul": {
      "should wrap input.read() with <ul></ul> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.ul;
        expect(transform.invoke(this.tag)).toEqual("<ul></ul>");
      }
    },

    "ol": {
      "should wrap input.read() with <ol></ol> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.ol;
        expect(transform.invoke(this.tag)).toEqual("<ol></ol>");
      }
    },

    "li": {
      "should wrap input.read() with <li></li> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.li;
        expect(transform.invoke(this.tag)).toEqual("<li></li>");
      }
    },

    "div": {
      "should wrap input.read() with <div></div> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.div;
        expect(transform.invoke(this.tag)).toEqual("<div></div>");
      }
    },

    "p": {
      "should wrap input.read() with <p></p> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.p;
        expect(transform.invoke(this.tag)).toEqual("<p></p>");
      }
    },

    "span": {
      "should wrap input.read() with <span></span> and pass the result into input.write()": function() {
        var transform = Performer.Transformers.Wrap.span;
        expect(transform.invoke(this.tag)).toEqual("<span></span>");
      }
    }

  });
});
