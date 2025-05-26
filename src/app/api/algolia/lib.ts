export function compressText(text: string): string {
    if (!text) return '';

    // List of Italian stop words to remove (common articles, prepositions, conjunctions)
    const italianStopWords = new Set([
        'a', 'al', 'allo', 'ai', 'agli', 'all', 'alla', 'alle', 'con', 'col', 'coi',
        'da', 'dal', 'dallo', 'dai', 'dagli', 'dall', 'dalla', 'dalle',
        'di', 'del', 'dello', 'dei', 'degli', 'dell', 'della', 'delle',
        'in', 'nel', 'nello', 'nei', 'negli', 'nell', 'nella', 'nelle',
        'su', 'sul', 'sullo', 'sui', 'sugli', 'sull', 'sulla', 'sulle',
        'per', 'tra', 'fra', 'il', 'lo', 'la', 'i', 'gli', 'le',
        'un', 'uno', 'una', 'che', 'chi', 'cui', 'e', 'ed', 'o', 'ma',
        'se', 'perché', 'anche', 'come', 'dove', 'quando', 'quindi',
        'questo', 'questa', 'questi', 'queste', 'quello', 'quella', 'quelli', 'quelle'
    ]);

    // Common patterns to remove or replace
    const patterns = {
        urls: /https?:\/\/[^\s]+/g,
        emails: /[\w\.-]+@[\w\.-]+\.\w+/g,
        numbers: /\d+/g,
        punctuation: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
        extraSpaces: /\s+/g,
        specialChars: /[^\w\s]/g,
        accents: {
            'à': 'a', 'è': 'e', 'é': 'e', 'ì': 'i', 'ò': 'o', 'ó': 'o', 'ù': 'u',
            'À': 'A', 'È': 'E', 'É': 'E', 'Ì': 'I', 'Ò': 'O', 'Ó': 'O', 'Ù': 'U'
        }
    };

    return text
        // Convert to lowercase
        .toLowerCase()

        // Remove URLs
        .replace(patterns.urls, '')

        // Remove email addresses
        .replace(patterns.emails, '')

        // Remove all punctuation
        .replace(patterns.punctuation, ' ')

        // Remove special characters
        .replace(patterns.specialChars, ' ')

        // Replace accented characters
        .split('')
        .map(char => patterns.accents[char as keyof typeof patterns.accents] || char)
        .join('')

        // Split into words, filter out stop words, and rejoin
        .split(/\s+/)
        .filter(word => {
            // Remove empty strings and single characters (except numbers)
            if (!word || (word.length === 1 && !patterns.numbers.test(word))) {
                return false;
            }
            // Remove stop words
            return !italianStopWords.has(word);
        })
        .join(' ')

        // Remove extra spaces and trim
        .replace(patterns.extraSpaces, ' ')
        .trim();
}