import { Parser } from 'fast-xml-parser';

const parser = new Parser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  allowBooleanAttributes: true,
  parseTrueNumberOnly: false,
  trimValues: true,
  cdataTagName: "__cdata",
  cdataPositionChar: "\\c",
  parseAttributeValue: true,
  tagValueProcessor: (val) => val,
  stopNodes: ["parse-me-as-string"],
});

function parseXml(xmlString) {
  const parsedXml = parser.parse(xmlString);
  return parsedXml;
}

export { parseXml };