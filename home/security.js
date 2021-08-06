// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitize(stringToClean);
// Result: A DocumentFragment containing text nodes and a <b> element, with a <i> child element
