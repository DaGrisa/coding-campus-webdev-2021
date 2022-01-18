function pluralizer() {
  printPluralizedNoun("cat");
  printPluralizedNoun("dog");
  printPluralizedNoun("truss");
  printPluralizedNoun("bus");
  printPluralizedNoun("marsh");
  printPluralizedNoun("lunch");
  printPluralizedNoun("tax");
  printPluralizedNoun("blitz");
  printPluralizedNoun("city");
  printPluralizedNoun("puppy");
  printPluralizedNoun("ray");
  printPluralizedNoun("boy");
}

/**
 * Returns the plural of a regular singular noun.
 * @param {*} regularNoun a regular singular noun
 * @returns the plural of a regular singular noun
 */
function pluralizeRegularNoun(regularNoun) {
  // es-rule
  if (
    regularNoun.endsWith("s") ||
    regularNoun.endsWith("ss") ||
    regularNoun.endsWith("sh") ||
    regularNoun.endsWith("ch") ||
    regularNoun.endsWith("x") ||
    regularNoun.endsWith("z")
  ) {
    return regularNoun + "es";
  }

  // y-rule
  if (
    regularNoun.endsWith("y") &&
    !(
      regularNoun.endsWith("ay") ||
      regularNoun.endsWith("ey") ||
      regularNoun.endsWith("iy") ||
      regularNoun.endsWith("oy") ||
      regularNoun.endsWith("uy")
    )
  ) {
    return regularNoun.slice(0, -1) + "ies";
  }

  // standard rule
  return regularNoun + "s";
}

function printPluralizedNoun(regularNoun) {
  document.write(regularNoun + " --> " + pluralizeRegularNoun(regularNoun));
  document.write("<br />");
}
