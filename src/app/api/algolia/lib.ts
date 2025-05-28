export function compressText(text: string): string {
    if (!text) return '';

    const italianStopWords = new Set([
        'a', 'al', 'allo', 'ai', 'agli', 'all', 'alla', 'alle', 'con', 'col', 'coi',
        'da', 'dal', 'dallo', 'dai', 'dagli', 'dall', 'dalla', 'dalle',
        'di', 'del', 'dello', 'dei', 'degli', 'dell', 'della', 'delle',
        'in', 'nel', 'nello', 'nei', 'negli', 'nell', 'nella', 'nelle',
        'su', 'sul', 'sullo', 'sui', 'sugli', 'sull', 'sulla', 'sulle',
        'per', 'tra', 'fra', 'il', 'lo', 'la', 'i', 'gli', 'le',
        'un', 'uno', 'una', 'che', 'chi', 'cui', 'e', 'ed', 'o', 'ma',
        'se', 'perche', 'anche', 'come', 'dove', 'quando', 'quindi',
        'questo', 'questa', 'questi', 'queste', 'quello', 'quella', 'quelli', 'quelle'
    ]);

    const patterns = {
        urls: /https?:\/\/[^\s]+/g,
        emails: /[\w\.-]+@[\w\.-]+\.\w+/g,
        numbers: /\d+/g,
        punctuation: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
        extraSpaces: /\s+/g,
    };

    const accentMap: Record<string, string> = {
        'à': 'a', 'è': 'e', 'é': 'e', 'ì': 'i', 'ò': 'o', 'ó': 'o', 'ù': 'u',
        'À': 'A', 'È': 'E', 'É': 'E', 'Ì': 'I', 'Ò': 'O', 'Ó': 'O', 'Ù': 'U'
    };

    const normalizeText = (str: string): string => {
        return str.replace(/[àèéìòóùÀÈÉÌÒÓÙ]/g, match => accentMap[match] || match);
    };

    return text
        // Convert to lowercase
        .toLowerCase()

        // Remove URLs
        .replace(patterns.urls, '')

        // Remove email addresses
        .replace(patterns.emails, '')

        // Remove punctuation (except accents)
        .replace(patterns.punctuation, ' ')

        // Convert accented characters to their non-accented equivalents
        .split(' ')
        .map(word => normalizeText(word))
        .join(' ')

        // Split into words, filter out stop words, and rejoin
        .split(/\s+/)
        .filter(word => {
            if (!word || (word.length === 1 && !patterns.numbers.test(word))) {
                return false;
            }
            return !italianStopWords.has(word);
        })
        .join(' ')

        // Remove extra spaces and trim
        .replace(patterns.extraSpaces, ' ')
        .trim();
}
