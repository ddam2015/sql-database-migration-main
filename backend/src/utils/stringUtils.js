import _ from "lodash";

// Extend String prototype to add a toTitleCase method that handles null, undefined, and empty strings
export function toTitleCase(str) {
  if (str == null || str.trim().length === 0) {
    return null; // Return null if the value is null, undefined, or an empty string
  }
  return _.startCase(_.toLower(str.trim()));
}
