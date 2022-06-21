const keepLowercase = [
  'a',
  'com',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'por',
  'sem',
];

const keepUppercase = [
  'cnpj',
  'cpf',
  'ltda',
  'qp',
  'tv',
  'mei',
  'me',
  'ei',
  'epp',
  'eireli',
  'sa',
];

const shouldKeepLowerCase = (wordLowerCase) =>
  keepLowercase.includes(wordLowerCase);
const shouldKeepUpperCase = (word) => keepUppercase.includes(word);

function capitalize(children) {
  if (!children || typeof children !== 'string') return '';

  const wordList = children.split(' ');
  const wordsWithoutWhiteSapace = wordList.filter((word) => !!word);
  const wordListCapitalized = wordsWithoutWhiteSapace?.map((word, index) => {
    const lowercase = word?.toLowerCase();
    if (shouldKeepLowerCase(lowercase) && index !== 0) {
      return lowercase;
    }
    if (shouldKeepUpperCase(lowercase)) {
      return lowercase?.toUpperCase();
    }

    return `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`;
  });
  const textCapitalized = wordListCapitalized.join(' ');

  return textCapitalized;
}

export default capitalize;
