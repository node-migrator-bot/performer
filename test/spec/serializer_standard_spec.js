define(['performer'],function(Performer) {
  describe('Performer.Serializers', function() {

    var blueprint = Performer.Blueprints.html5();
    var serializer = Performer.Serializers.standard;

    it('should be defined', function() {
      expect(Performer.Serializers).toBeDefined();
    });

    it('should not serialize values for tag names held in VALUE_NOT_IN_TAG',function() {
      var tag = new Performer.Tag({
        serializer: serializer,
        schema: blueprint.read('select'),
        value: 'hello'
      });
      expect(tag.read()).toEqual("<select ></select>");
    });

    describe('Performer.Serializers.standard', function() {

      it('should should serialize the html5 blueprint "text"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('text')
        });
        expect(tag.read()).toEqual('<input type="text"/>');
      });

      it('should should serialize the html5 blueprint "number"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('number')
        });
        expect(tag.read()).toEqual('<input type="number"/>');
      });

      it('should should serialize the html5 blueprint "email"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('email')
        });
        expect(tag.read()).toEqual('<input type="email"/>');
      });

      it('should should serialize the html5 blueprint "url"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('url')
        });
        expect(tag.read()).toEqual('<input type="url"/>');
      });

      it('should should serialize the html5 blueprint "date"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('date')
        });
        expect(tag.read()).toEqual('<input type="date"/>');
      });

      it('should should serialize the html5 blueprint "password"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('password')
        });
        expect(tag.read()).toEqual('<input type="password"/>');
      });

      it('should should serialize the html5 blueprint "select"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('select')
        });
        expect(tag.read()).toEqual('<select ></select>');
      });

      it('should should serialize the html5 blueprint "select" with options', function() {
        var schema = {"blueprint":"select","options":{"value":"test"}};
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.impute(schema)
        });
        expect(tag.read()).toEqual('<select ><option value="value">test</option></select>');
      });

      it('should should serialize the html5 blueprint "textarea"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('textarea')
        });
        expect(tag.read()).toEqual('<textarea ></textarea>');
      });

      it('should should serialize the html5 blueprint "hidden"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('hidden')
        });
        expect(tag.read()).toEqual('<input type="hidden"/>');
      });

      it('should should serialize the html5 blueprint "file"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('file')
        });
        expect(tag.read()).toEqual('<input type="file"/>');
      });

      it('should should serialize the html5 blueprint "checkbox"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('checkbox')
        });
        expect(tag.read()).toEqual('<input type="checkbox"/>');
      });

      it('should should serialize the html5 blueprint "radio"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('radio')
        });
        expect(tag.read()).toEqual('<input type="radio"/>');
      });

      it('should should serialize the html5 blueprint "button"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('button')
        });
        expect(tag.read()).toEqual('<input type="button"/>');
      });

      it('should should serialize the html5 blueprint "submit"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('submit')
        });
        expect(tag.read()).toEqual('<input type="submit"/>');
      });

    });

  });
});
