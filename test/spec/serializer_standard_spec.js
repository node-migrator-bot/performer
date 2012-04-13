define(['performer'],function(Performer) {
  describe('Performer.Serializers', function() {

    it('should be defined', function() {
      expect(Performer.Serializers).toBeDefined();
    });

    describe('Performer.Serializers.standard', function() {

      var blueprint = Performer.Blueprints.html5();
      var serializer = Performer.Serializers.standard;

      it('should should serialize the blueprint "text"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('text')
        });
        expect(tag.read()).toEqual('<input type="text"/>');
      });

      it('should should serialize the blueprint "number"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('number')
        });
        expect(tag.read()).toEqual('<input type="number"/>');
      });

      it('should should serialize the blueprint "email"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('email')
        });
        expect(tag.read()).toEqual('<input type="email"/>');
      });

      it('should should serialize the blueprint "url"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('url')
        });
        expect(tag.read()).toEqual('<input type="url"/>');
      });

      it('should should serialize the blueprint "date"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('date')
        });
        expect(tag.read()).toEqual('<input type="date"/>');
      });

      it('should should serialize the blueprint "password"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('password')
        });
        expect(tag.read()).toEqual('<input type="password"/>');
      });

      it('should should serialize the blueprint "select"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('select')
        });
        expect(tag.read()).toEqual('<select ></select>');
      });

      it('should should serialize the blueprint "select" with options', function() {
        var schema = {"blueprint":"select","options":{"value":"test"}};
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.impute(schema)
        });
        expect(tag.read()).toEqual('<select ><option value="value">test</option></select>');
      });

      it('should should serialize the blueprint "textarea"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('textarea')
        });
        expect(tag.read()).toEqual('<textarea ></textarea>');
      });

      it('should should serialize the blueprint "hidden"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('hidden')
        });
        expect(tag.read()).toEqual('<input type="hidden"/>');
      });

      it('should should serialize the blueprint "file"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('file')
        });
        expect(tag.read()).toEqual('<input type="file"/>');
      });

      it('should should serialize the blueprint "checkbox"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('checkbox')
        });
        expect(tag.read()).toEqual('<input type="checkbox"/>');
      });

      it('should should serialize the blueprint "radio"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('radio')
        });
        expect(tag.read()).toEqual('<input type="radio"/>');
      });

      it('should should serialize the blueprint "button"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('button')
        });
        expect(tag.read()).toEqual('<input type="button"/>');
      });

      it('should should serialize the blueprint "submit"', function() {
        var tag = new Performer.Tag({
          serializer: serializer,
          schema:blueprint.read('submit')
        });
        expect(tag.read()).toEqual('<input type="submit"/>');
      });

    });

  });
});
