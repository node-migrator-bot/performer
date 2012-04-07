# Performer [![Build Status](https://secure.travis-ci.org/tkellen/performer.png)](http://travis-ci.org/[tkellen]/[performer])
> DRY up your forms like never before.

Performer has no external dependencies, works in Node or the browser (with AMD, or as an inline script), ships with full test coverage, and adheres to [semantic versioning](http://semver.org/).  The implementation is simple, elegant and powerful. *Plugins for integration with [Backbone](http://documentcloud.github.com/backbone/) coming soon.*

**v0.0.1**: *this is **alpha** quality software, the API is changing regularly, it is not ready for public use.*

## Concepts

**Blueprint:** Commonly used form elements, described in JSON.

**Schema:** A specific form, described in JSON (referencing Blueprints).

**Transformer:** Functions that can modify or otherwise interact with form tags during generation (e.g. wrap with a div).

**Pipeline:** A set of transformers to apply to a given form element or group to produce marked up HTML.

## Usage

### Blueprints
> Easily define and extend Blueprints for global re-use in your Schemas (ships with [blueprint for HTML5 forms](https://github.com/tkellen/performer/blob/master/lib/performer/blueprints/html5.js)).

##### Create your Blueprint:
```javascript
var blueprint = new Performer.Blueprints.html5();
```

*You can skip the blueprinting process for simple forms&mdash;the [built-in HTML5 blueprint](https://github.com/tkellen/performer/blob/master/lib/performer/blueprints/html5.js) has definitions for most common form elements.*

##### Add Blueprints one at a time, or in bulk:
```javascript
blueprint.add("text", {
  "tag": "input",
  "attributes": {
    "type": "text"
  }
});

blueprint.add("address", {
  "addr1": { "blueprint": "text" },
  "addr2": { "blueprint": "text" },
  "city": { "blueprint": "text" },
  "state": { "blueprint": "select" },
  "zip": { "blueprint": "number" },
});

var data = {
  "number": {
    "tag": "input",
    "attributes": {
      "type": "number"
    }
  },
  "email": {
    "tag": "input",
    "attributes": {
      "type": "email"
    }
  }
};
// WARNING: this will replace any existing blueprints that share the same key
blueprint.add_many(data);
```

##### Modify, replace, or remove an existing Blueprint:
```javascript
blueprint.modify("text", {
  "attributes": {
    "className": "text_field"
  }
});

blueprint.replace("text", {"replaced": "yup"})

blueprint.remove("text");
```

#### Blueprint Usage Notes:
Anything you can put in a Schema (defined below) can be stored in a Blueprint for use across multiple forms.  In the example above, a series of common fields used to display an address has been added.  This can be included in any form by referencing the blueprint by name (shown below).

---

### Schemas
> Describe your form once, referencing blueprints to do the heavy lifting.

##### Create your Schema:
```javascript
var data = {
  "contact": {
    "first": { "blueprint": "text" },
    "last": { "blueprint": "text" },
    "address": { "blueprint": "address" }
  }
};
var schema = new Performer.Schema(data);
```

#### Schema Usage Notes:
...fill this out.

---

### Transformers
> Generate form elements any way you please.

##### Transformers are easy to write:
```javascript
var wrapper = function(input, helpers) {
  input.write("<div>"+input.read()+"</div>");
}
```

#### Transformer Usage Notes:
Explain how transformers can reference attributes in schemas.

Performer ships with these transformers:

  * Performer.Transform.Wrap
    - fieldset, legend, div, ol, ul, li, div, p
  * Performer.Transform.Label
    - wrap, sibling
  * Performer.Transform.Hint
    - before, after
  * Performer.Transform.Error
    - before, after

---

### Pipelines
> Package your transformations for re-use.

##### Example:
```javascript
// examples here
```

#### Pipeline Usage Notes:
Each pipeline has two sets of transformers, one for **tags** and one for **groups**.  When a form (or a section of a form) is generated, each element is passed through the **tag** pipeline.  Groups of processed tags are then passed through the **group** pipeline for final transformation.

---

### Form
> Generate your forms however you like; on the server, in a browser, in conjuction with a templating engine, directly into the DOM, whatever!  Build the whole thing with a single call, in sections, or tag-by-tag.

##### Example:
```javascript
// examples here
```

#### Form Usage Notes:
...fill this out.
