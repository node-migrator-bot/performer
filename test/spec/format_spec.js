define(['performer'],function(Performer) {
  describe('Performer.Format', function() {

    var format;
    beforeEach(function() {
      format = new Performer.Format();
    });

    it('should be defined', function() {
      expect(Performer.Format).toBeDefined();
    });

    it('should look up formats by name', function() {
      expect(format.find('text')).toEqual({tag:'input', attributes:{type:'text'}});
    });

    it('should throw an error if no format is found', function() {
      var test = function() { format.find('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' format."));
    });

    it('should allow adding formats', function() {
      format.add('test', {tag:'input'});
      expect(format.find('test')).toEqual({tag:'input'});
    });

    it('should raise an error when adding a format that already exists', function() {
      var test = function() { format.add('text', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' format; it already exists."));
    });

    it('should allow existing formats to be extended with new values', function() {
      format.extend('text', {tag:'new'});
      expect(format.find('text')).toEqual({tag:'new', attributes:{type:'text'}});
    });

    it('should raise an error when trying to extend a type that doesn\'t exist', function() {
      var test = function() { format.extend('test', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to locate 'test' format."));
    });
/*
    it('should allow creating a nested format', function(){
      var data = {
        root: {
          _fields: {
            address: { format: 'address' }
          }
        }
      };
      var options = {
        type_system: type
      };
      var form = new Performer.Form(data,type);
      form.options.type_system.replace('address',{
        _fields: {
          addr1: { format: 'text' },
          addr2: { format: 'text' },
          city: { format: 'text' },
          state: { format: 'text' },
          zip: { format: 'text' }
        }
      });
      window.form = form;
      console.log(form.build('address'));

    });
*/
  });
});