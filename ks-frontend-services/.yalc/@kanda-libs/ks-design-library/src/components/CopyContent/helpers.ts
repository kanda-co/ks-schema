/**
 * Copies string contents to the clipboard
 */
export const copyToClipboard = (content: string): void => {
  // create element
  const element = document.createElement('textarea');
  // Set element value to content
  element.value = content;
  // Make element readonly
  element.setAttribute('readonly', '');
  // Style element to be hidden
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  // Append to body
  document.body.appendChild(element);
  // Select the content
  element.select();
  // Fix for mobiles
  element.setSelectionRange(0, 99999);
  // Add content to clipboard
  navigator.clipboard.writeText(element.value);
  // Remove the element
  document.body.removeChild(element);
};
