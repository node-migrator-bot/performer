define(['performer'],function(Performer) {
  describe('Performer.Transform.Serialize', function() {

    it('should be defined', function() {
      expect(Performer.Transform.Serialize).toBeDefined();
    });

    describe('Performer.Blueprints.html5', function() {

      var blueprint = Performer.Blueprints.html5();
      var pipeline = new Performer.Pipeline([Performer.Transform.Serialize.standard]);

      it('should should serialize the blueprint "text"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('text')});
        expect(pipeline.invoke(tag)).toEqual('<input type="text"/>');
      });

      it('should should serialize the blueprint "number"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('number')});
        expect(pipeline.invoke(tag)).toEqual('<input type="number"/>');
      });

      it('should should serialize the blueprint "email"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('email')});
        expect(pipeline.invoke(tag)).toEqual('<input type="email"/>');
      });

      it('should should serialize the blueprint "url"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('url')});
        expect(pipeline.invoke(tag)).toEqual('<input type="url"/>');
      });

      it('should should serialize the blueprint "date"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('date')});
        expect(pipeline.invoke(tag)).toEqual('<input type="date"/>');
      });

      it('should should serialize the blueprint "password"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('password')});
        expect(pipeline.invoke(tag)).toEqual('<input type="password"/>');
      });

      it('should should serialize the blueprint "select"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('select')});
        expect(pipeline.invoke(tag)).toEqual('<select ></select>');
      });

      it('should should serialize the blueprint "select" with options', function() {
        var schema = {"blueprint":"select","options":{"value":"test"}};
        var tag = new Performer.Tag({schema:blueprint.impute(schema)});
        expect(pipeline.invoke(tag)).toEqual('<select ><option value="value">test</option></select>');
      });

      it('should should serialize the blueprint "textarea"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('textarea')});
        expect(pipeline.invoke(tag)).toEqual('<textarea ></textarea>');
      });

      it('should should serialize the blueprint "hidden"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('hidden')});
        expect(pipeline.invoke(tag)).toEqual('<input type="hidden"/>');
      });

      it('should should serialize the blueprint "file"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('file')});
        expect(pipeline.invoke(tag)).toEqual('<input type="file"/>');
      });

      it('should should serialize the blueprint "checkbox"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('checkbox')});
        expect(pipeline.invoke(tag)).toEqual('<input type="checkbox"/>');
      });

      it('should should serialize the blueprint "radio"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('radio')});
        expect(pipeline.invoke(tag)).toEqual('<input type="radio"/>');
      });

      it('should should serialize the blueprint "button"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('button')});
        expect(pipeline.invoke(tag)).toEqual('<input type="button"/>');
      });

      it('should should serialize the blueprint "submit"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('submit')});
        expect(pipeline.invoke(tag)).toEqual('<input type="submit"/>');
      });

    });

  });
});
