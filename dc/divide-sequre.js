function divideSequre(a, b) {
  const long = Math.max(a, b);
  const short = Math.min(a, b);
  const reverso = long / short;
  if (reverso % 1 === 0) {
    return short;
  }
  const newShort = long % short;
  return divideSequre(newShort, short);
}

module.exports = divideSequre;
