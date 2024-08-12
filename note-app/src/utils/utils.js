export const getInitials = (name) => {
    name = stripSpaces(name)
    const words = name.split(' ', 2);
    if (words.length > 1) {
      return words.map((word) => word[0].toUpperCase()).join('');
    }
    return name[0].toUpperCase();
};

export function stripSpaces(str) {
    if(!str) return str;
    return str.replace(/^\s+/g, '');
}