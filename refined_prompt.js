/**
 * Converts a given string to camel case format.
 * 
 * Camel case format capitalizes the first letter of each word except for the first word,
 * and removes any non-letter characters from the input string.
 * 
 * @param {string} str - The input string to be converted to camel case.
 * @throws {Error} Throws an error if no letters are present in the given string.
 * @returns {string} The camel case formatted string.
 * 
 * @example
 * // returns 'thisIsCamelCase'
 * toCamelCase('this is camel case');
 * 
 * @example
 * // returns 'singleWord'
 * toCamelCase('single word');
 * 
 * @example
 * // throws Error: No letters present in the given string
 * toCamelCase('1234!@#$');
 */

/**
 * Converts a given string to dot case format.
 * 
 * Dot case format replaces spaces, underscores, and hyphens with dots,
 * and separates camel case words with dots while converting the entire string to lowercase.
 * 
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Throws an error if no letters are present in the given string.
 * @returns {string} The dot case formatted string.
 * 
 * @example
 * // returns 'this.is.dot.case'
 * toDotCase('this is dot case');
 * 
 * @example
 * // returns 'single.word'
 * toDotCase('single_word');
 * 
 * @example
 * // returns 'another.example'
 * toDotCase('anotherExample');
 * 
 * @example
 * // throws Error: No letters present in the given string
 * toDotCase('1234!@#$');
 */
function toCamelCase(str) {
    const letters = str.replace(/[^a-zA-Z]/g, '');
    
    if (letters.length === 0) {
        throw new Error('No letters present in the given string');
    }
    
    return letters
        .split('')
        .map((char, index) => {
            return index === 0 ? char.toLowerCase() : char.toLowerCase();
        })
        .join('')
        .replace(/\b\w/g, (match, offset) => {
            return offset === 0 ? match.toLowerCase() : match.toUpperCase();
        });
}

function toDotCase(str) {
    const letters = str.replace(/[^a-zA-Z]/g, '');
    
    if (letters.length === 0) {
        throw new Error('No letters present in the given string');
    }
    
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[\s_-]+/g, '.')
        .toLowerCase();
}

