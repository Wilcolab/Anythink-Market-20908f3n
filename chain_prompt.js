function toKebabCase(str) {
    return str
        .replace(/[^\w\s]/g, '') // Remove all symbols
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .toLowerCase();            // Convert to lowercase
}