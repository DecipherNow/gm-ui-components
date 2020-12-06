const path = require("path");
const template = require(path.resolve(__dirname, "template.js"));

// See the svgr docs for all config options
// https://react-svgr.com/docs/options/
module.exports = {
  template,
  svgoConfig: {
    plugins: {
      removeAttrs: { attrs: "fill" },
      convertIdToClass: {
        type: "perItem",
        name: "convertIdToClass",
        description: "Converts ID attributes to Class attributes",
        fn: function(item) {
          if (item.isElem() && item.hasAttr("id")) {
            var oldIdValue = item.attr("id").value;
            item.removeAttr("id");
            // For some reason this fails
            // without preparing items with
            // an empty class.
            if (!item.hasAttr("class")) {
              item.addAttr({
                name: "class",
                value: "",
                prefix: "",
                local: "class"
              });
            }
            item.addAttr({
              name: "class",
              value: oldIdValue,
              prefix: "",
              local: "class"
            });
          }
        }
      },
      prefixIds: false,
      cleanupIDs: false
    }
  }
};
