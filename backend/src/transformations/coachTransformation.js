import _ from "lodash";
import { toTitleCase } from "../utils/stringUtils.js";

// Function to sanitize and clean coach data
export function cleanCoachData(coachData) {
  // Ensure firstName is a valid non-empty string
  coachData.firstName = !_.isEmpty(coachData.firstName)
    ? toTitleCase(coachData.firstName)
    : "No First Name"; // Set default if null/undefined

  // Ensure lastName is a valid non-empty string
  coachData.lastName = !_.isEmpty(coachData.lastName)
    ? toTitleCase(coachData.lastName)
    : "No Last Name"; // Set default if null/undefined

  // Make email all lowercase if it exists
  coachData.email = coachData.email ? _.toLower(coachData.email.trim()) : null;

  // Sanitize the city if it exists
  if (coachData.address && coachData.address.city) {
    let city = coachData.address.city.trim();

    // Check for specific city transformations
    const cityTransformations = {
      "Las Vegas NV": "Las Vegas",
      "N/A": null,
      "Pasadena’s": "Pasadena",
    };

    city = cityTransformations[city] || toTitleCase(city.split(",")[0]);

    coachData.address.city = city;
  }

  return coachData;
}
