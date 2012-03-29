# Performer
> DRY up your forms like never before.

[![Build Status](https://secure.travis-ci.org/tkellen/performer.png)](http://travis-ci.org/[tkellen]/[performer])
*Will show failing until travis-ci upgrades to PhantomJS 1.5.*

#### Ships with:
 - Full test coverage
 - No external dependencies
 - Node and Browser support (use with AMD or as an inline script)

## Concepts

### Blueprints
> Easily define and extend Blueprints for global re-use in your schemas (ships with [HTML5](https://github.com/tkellen/performer/blob/master/lib/performer/blueprints/html5.js)).

#### Create a Blueprint:
```
var data = {
  email: {
    tag: 'input',
    attributes: {
      type: 'email',
      className: 'email_field'
    }
  }
  address: {
    _fields: {
      addr1: { blueprint: 'text' }
      addr2: { blueprint: 'text' }
      city: { blueprint: 'text' }
      state: { blueprint: 'select' }
      zip: { blueprint: 'number' }
  }
};
var blueprint = new Performer.Blueprint(data);
````

#### Add to a Blueprint:
```
blueprint.add('text',{
  tag: 'input',
  attributes: {
    type: 'text'
  }
});
```

#### Modify a Blueprint:
```
blueprint.extend('text',{
  attributes: {
    className: 'text_field'
  }
});
```

#### Remove elements from a Blueprint:
```
blueprint.remove('text');
```

#### Usage:

Anything you can put in a Schema (defined below) can be stored in a Blueprint for use across multiple forms.  In the "Create a Blueprint" example above, a series of common fields used to display an address has been added.  This can be included in any form by referencing the blueprint by name (shown below).

---

### Schemas
> Describe your form once, optionally referencing your blueprints to do the heavy lifting.

#### Create a Schema:
```
var schema = {
  root: {
    _fields: {
      contact:{
        first: { blueprint: 'text' },
        last: { blueprint: 'text' },
        address: { blueprint: 'address' }
      }
    }
  }
}
var schema = new Performer.Schema(schema);
```

### Form
> Generate your forms with a single call, in sections, or tag-by-tag.

#### Usage:

...coming soon.

---

### Pipelines and Transformers
> Mark up your form elements by creating a pipeline to transform them any way you like.

#### Usage:

Each pipeline has two sets of transformers, one for **tags** and one for **groups**.  When a form elements are generated, each one is passed through the **tag** pipeline.  Groups of processed tags are then passed through the **group** pipeline for final transformation.

#### Transformers are easy to write:

```
var wrapper = function(input,output) {
  output.write("<div>"+input.read()+"</div>");
}
```

#### Performer ships with these transformers:

  * Performer.Transform.Wrap
    - fieldset, legend, div, ol, ul, li, div, p
  * Performer.Transform.Label
    - wrap, sibling
  * Performer.Transform.Hint
    - before, after
  * Performer.Transform.Error
    - before, after

