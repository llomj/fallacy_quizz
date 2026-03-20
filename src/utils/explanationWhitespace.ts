/**
 * Normalizes whitespace for codon / in-depth panels using whitespace-pre-wrap.
 * Collapses markdown-style trailing spaces before newlines and long runs of blank lines
 * so spacing matches across questions.
 */
export function normalizeExplanationWhitespace(text: string): string {
  if (!text) return text;
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');
}
