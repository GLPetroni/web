(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['twit'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"twit\">\n    <div class=\"twit-icon\">\n        <i class=\"fas fa-bullhorn\"></i>\n    </div>\n\n    <div class=\"twit-content\">\n        <p class=\"twit-text\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"twit_body") || (depth0 != null ? lookupProperty(depth0,"twit_body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"twit_body","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":25}}}) : helper)))
    + "\n        </p>\n\n        <p class=\"twit-author\">\n            <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"twit_auther") || (depth0 != null ? lookupProperty(depth0,"twit_auther") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"twit_auther","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":39}}}) : helper)))
    + "</a>\n        </p>\n\n    </div>                             \n</article>\n";
},"useData":true});
})();