function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const componentNameWithIconPrefix = `Icon${componentName.name.replace(
    /^Svg/,
    ""
  )}`;

  const jsxTpl = template.smart({ plugins: ["jsx"] });

  /* svgr always wraps the glyph in an svg, but we want to
   use our own custom Icon component as the svg element. The following code 
   lifts up the `g` element one level, in place of the svg. */
  jsx.openingElement = jsx.children[0].openingElement;
  jsx.closingElement = jsx.children[0].closingElement;
  jsx.children = jsx.children[0].children;
  jsx.selfClosing = false;

  const ast = jsxTpl.ast`
  import React from 'react';
  import Icon from "components/Icon";
  
  function ${componentName} (${props}) {
    return React.createElement(Icon, ${props}, ${jsx})
  }
  
  const memoizedIcon = React.memo(${componentName});
  
  export default memoizedIcon;
  `;

  // We can't directly interpolate arbitrary variables into ast, so we need to create an expression
  // Based off https://github.com/sembark/gladio/blob/master/packages/icons/svgr.config.js
  ast.push(
    template.expression(
      `memoizedIcon.displayName = '${componentNameWithIconPrefix}'`
    )()
  );

  return ast;
}
module.exports = template;
