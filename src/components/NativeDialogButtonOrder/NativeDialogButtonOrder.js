import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for ordering buttons according to OS convention.
 * Note that the wrapper returns only children and no container.
 * 
 * Areas to improve
 * - Configurable label matching
 * - Internationalization
 * - More OS interface guideline integration, e.g. positioning 'Help' buttons, or supporting Android
 * - Support for separator elements between buttons, if they exist in the source
 * 
 * @returns JSX.Element
 */
function NativeDialogButtonOrder({ auto, children }) {

  // Configuration
  const okLabels = ['ok', 'yes', 'agree', 'next', 'apply', 'go'];
  const cancelLabels = ['cancel', 'no', 'disagree', 'prev', 'don\'t', 'back'];
  const RightSideOKOSes = new RegExp("(mac os|ios)");
  const LeftSideOKOSes = new RegExp("(win)");
  const userAgent = window.navigator.userAgent.toLowerCase();

  const getLabel = (child) => (child.props.value || child.props.children || '');
  const isButton = (child) => (child.type.displayName === 'Button' || child.props.type === 'submit');
  const labelMatchesArray = (array, child) => (array.includes(getLabel(child).toLowerCase()));

  const isOkButton = (child, auto) => {
    // If is a button and has a defined data-dialog-position...
    return (isButton(child) && (child.props['data-dialog-position'] === 'ok'
      // Or is a button and we're allowed to guess the dialog position based on the label
      || ((auto !== false) && (labelMatchesArray(okLabels, child)))
    ));
  };

  const isCancelButton = (child, auto) => {
    // If is a button and has a defined data-dialog-position...
    return (isButton(child) && (child.props['data-dialog-position'] === 'cancel'
      // Or is a button and we're allowed to guess the dialog position based on the label
      || ((auto !== false) && (labelMatchesArray(cancelLabels, child)))
    ));
  };

  const okButtons = children.filter(child => isOkButton(child, auto));
  const cancelButtons = children.filter(child => isCancelButton(child, auto));
  const rest = children.filter(child => !isOkButton(child, auto) && !isCancelButton(child, auto));

  // Messaging
  if (okButtons.length === 0 && auto === false) {
    console.info("'Auto' is disabled but no 'OK' buttons were found. Set `data-dialog-position` to `'ok'` or `'cancel'` to place buttons, or re-enable `auto`.");
  }

  if (RightSideOKOSes.test(userAgent)) {
    return (<>{rest} {cancelButtons} {okButtons}</>);
  } else if (LeftSideOKOSes.test(userAgent)) {
    return (<>{rest} {okButtons} {cancelButtons}</>);
  } else {
    return (children);
  }
}

NativeDialogButtonOrder.PropTypes = {
  auto: PropTypes.boolean
}

NativeDialogButtonOrder.displayName = "NativeDialogButtonOrder";

export default NativeDialogButtonOrder;
