/**
 * @param {string} text - the input text that been sliced
 * @param {number} {maxLength = 300}  - the maximum length before the text been sliced
 * @return  the text that been sliced
 * */
export function testSlicer(text: string, maxLength: number = 300) {
  console.log(text.slice(0, maxLength));
  if (text.length >= maxLength) {
    return `${text.slice(0, maxLength)} ...`;
  } else {
    return text;
  }
}
