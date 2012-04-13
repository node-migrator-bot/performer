define(['performer'],function(Performer) {
  describe('Performer.Serializer', function() {

    it('should be defined', function() {
      expect(Performer.Serializer).toBeDefined();
    });

    describe('Performer.Serialize.standard', function() {

      var blueprint = Performer.Blueprints.html5();
      var serializer = Performer.Serializer.standard;

      it('should should serialize the blueprint "text"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('text')},serializer);
        expect(tag.read()).toEqual('<input type="text"/>');
      });

      it('should should serialize the blueprint "number"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('number')},serializer);
        expect(tag.read()).toEqual('<input type="number"/>');
      });

      it('should should serialize the blueprint "email"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('email')},serializer);
        expect(tag.read()).toEqual('<input type="email"/>');
      });

      it('should should serialize the blueprint "url"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('url')},serializer);
        expect(tag.read()).toEqual('<input type="url"/>');
      });

      it('should should serialize the blueprint "date"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('date')},serializer);
        expect(tag.read()).toEqual('<input type="date"/>');
      });

      it('should should serialize the blueprint "password"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('password')},serializer);
        expect(tag.read()).toEqual('<input type="password"/>');
      });

      it('should should serialize the blueprint "select"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('select')},serializer);
        expect(tag.read()).toEqual('<select ></select>');
      });

      it('should should serialize the blueprint "select" with options', function() {
        var schema = {"blueprint":"select","options":{"value":"test"}};
        var tag = new Performer.Tag({schema:blueprint.impute(schema)},serializer);
        expect(tag.read()).toEqual('<select ><option value="value">test</option></select>');
      });

      it('should should serialize the blueprint "textarea"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('textarea')},serializer);
        expect(tag.read()).toEqual('<textarea ></textarea>');
      });

      it('should should serialize the blueprint "hidden"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('hidden')},serializer);
        expect(tag.read()).toEqual('<input type="hidden"/>');
      });

      it('should should serialize the blueprint "file"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('file')},serializer);
        expect(tag.read()).toEqual('<input type="file"/>');
      });

      it('should should serialize the blueprint "checkbox"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('checkbox')},serializer);
        expect(tag.read()).toEqual('<input type="checkbox"/>');
      });

      it('should should serialize the blueprint "radio"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('radio')},serializer);
        expect(tag.read()).toEqual('<input type="radio"/>');
      });

      it('should should serialize the blueprint "button"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('button')},serializer);
        expect(tag.read()).toEqual('<input type="button"/>');
      });

      it('should should serialize the blueprint "submit"', function() {
        var tag = new Performer.Tag({schema:blueprint.read('submit')},serializer);
        expect(tag.read()).toEqual('<input type="submit"/>');
      });

    });

  });
});
