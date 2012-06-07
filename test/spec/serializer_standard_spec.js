define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Serializers", {

    "setUp": function() {
      this.blueprint = Performer.Blueprints.html5();
      this.serializer = Performer.Serializers.standard;
    },

    "should be defined": function() {
      expect(Performer.Serializers).toBeDefined();
    },

    "should not serialize values for tag names held in VALUE_NOT_IN_TAG": function() {
      var tag = new Performer.Tag({
        serializer: this.serializer,
        schema: this.blueprint.read('select'),
        value: 'hello'
      });
      expect(tag.read()).toEqual("<select ></select>");
    },

    "Performer.Serializers.standard": {

      "should should serialize the html5 blueprint 'text'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('text')
        });
        expect(tag.read()).toEqual('<input type="text"/>');
      },

      "should should serialize the html5 blueprint 'number'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('number')
        });
        expect(tag.read()).toEqual('<input type="number"/>');
      },

      "should should serialize the html5 blueprint 'email'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('email')
        });
        expect(tag.read()).toEqual('<input type="email"/>');
      },

      "should should serialize the html5 blueprint 'url'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('url')
        });
        expect(tag.read()).toEqual('<input type="url"/>');
      },

      "should should serialize the html5 blueprint 'date'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('date')
        });
        expect(tag.read()).toEqual('<input type="date"/>');
      },

      "should should serialize the html5 blueprint 'password'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('password')
        });
        expect(tag.read()).toEqual('<input type="password"/>');
      },

      "should should serialize the html5 blueprint 'select'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('select')
        });
        expect(tag.read()).toEqual('<select ></select>');
      },

      "should should serialize the html5 blueprint 'select' with options": function() {
        var schema = {"blueprint":"select","options":{"value":"test"}};
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.impute(schema)
        });
        expect(tag.read()).toEqual('<select ><option value="value">test</option></select>');
      },

      "should should serialize the html5 blueprint 'textarea'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('textarea')
        });
        expect(tag.read()).toEqual('<textarea ></textarea>');
      },

      "should should serialize the html5 blueprint 'hidden'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('hidden')
        });
        expect(tag.read()).toEqual('<input type="hidden"/>');
      },

      "should should serialize the html5 blueprint 'file'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('file')
        });
        expect(tag.read()).toEqual('<input type="file"/>');
      },

      "should should serialize the html5 blueprint 'checkbox'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('checkbox')
        });
        expect(tag.read()).toEqual('<input type="checkbox"/>');
      },

      "should should serialize the html5 blueprint 'radio'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('radio')
        });
        expect(tag.read()).toEqual('<input type="radio"/>');
      },

      "should should serialize the html5 blueprint 'button'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('button')
        });
        expect(tag.read()).toEqual('<input type="button"/>');
      },

      "should should serialize the html5 blueprint 'submit'": function() {
        var tag = new Performer.Tag({
          serializer: this.serializer,
          schema: this.blueprint.read('submit')
        });
        expect(tag.read()).toEqual('<input type="submit"/>');
      }

    }

  });
});
