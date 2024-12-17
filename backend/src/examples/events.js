// Events table
// What is eventtime?

const event1 = {
  id: "66ad59f11191f7c1ebc72566",
  name: "G365 The Rise 2025",
  shortName: "The Rise",
  orgName: "Grassroots 365",
  orgId: "66ad59f11191f7c1ebc72566",
  type: 1, // need to figure out what this is
  logoUrl:
    "https://grassroots365.com/wp-content/uploads/2024/08/TheRiseLogo_Final_400x300_72ppi.png",
  hashtag: "G365TheRise",
  dates: [
    { start: "2025-08-09 08:00:00", end: "2025-08-09 16:00:00" },
    { start: "2025-08-010 08:00:00", end: "2025-08-10 16:00:00" },
  ],
  divisions: [
    { "8U": ["One"] },
    { "9U": ["Open", "Gold", "Silver", "Bronze", "Copper"] },
    { "10U": ["Open", "Gold", "Silver", "Bronze", "Copper"] },
    { "11U": ["Gold", "Silver", "Bronze", "Copper"] },
    { "12U": ["Open", "Gold", "Silver", "Bronze", "Copper"] },
    { "13U": ["Open", "Gold", "Silver", "Bronze", "Copper"] },
    { "14U": ["Gold", "Silver", "Bronze", "Copper"] },
  ],
  //   locations: ["OGP Anaheim, CA", "OGP Ladera, CA"],
  //   shoort_locations: [
  //     "OGP Anaheim<br/>1500 S Anaheim Blvd<br/> Anaheim, CA 92805",
  //     "2 Terrace Rd<br/> Ladera Ranch, CA 92694",
  //     "31 4th St, Oakland, CA 94607",
  //   ],
  locations: [
    {
      displayName: "OGP Anaheim, CA",
      name: "OGP Anaheim",
      street: "1500 S Anaheim Blvd",
      city: "Anaheim",
      state: "CA",
      zip: "92805",
      country: "USA",
    },
    {
      displayName: "Ladera Sports Center, CA",
      name: "Ladera Sports Center",
      street: "2 Terrace Rd",
      city: "Ladera Ranch",
      state: "CA",
      zip: "92694",
      country: "USA",
    },
    {
      displayName: "OGP Oakland, CA",
      name: "Oakland Sports Center",
      street: "31 4th St",
      city: "Oakland",
      state: "CA",
      zip: "94607",
      country: "USA",
    },
  ],
  scheduleLink: [{ exposure: "217751" }],
  sponsors: [{ liveBarn: "" }],
  createdAt: "2023-01-01 00:00:00",
  createdBy: "1234567890abcde",
  updatedAt: "2023-01-02 00:00:00",
  isDeleted: false,
  deletedAt: null,
  deletedBy: null,
  // Should we included these?
  price: "395.00",
  multiTeamDiscount: "25.00",
  contacts: [
    "marlon.wells@hypeherhoopscircuit.com",
    "quincy.quintero@hypeherhoopscircuit.com",
    "buck.matthews@hypeherhoopscircuit.com",
  ],
  deadlineDaysBefore: 10,
  maxConfirmationsReceived: false, // sold out could be a verbal confirmation and not necessarily a paid transaction - need to think this through,
  canCheckout: true,
  allowableGenders: ["Boys", "Girls"],
  groups: [
    "SoCal",
    "Master Schedule",
    "Calendars",
    "Featured Events",
    "Master Schedule SS",
    "BILAAC High School",
  ],
};

const eventType = ["Tournament", "Camp", "All Star Game", "League"];
// Player events vs team events
// Tournaments, Leagues,
// Some events are teams, some events are player/parent
// YBL is a little tricky
/*



*/
/*
 Type field


 1: Tournaments

 2: Camps

 3: Club Program Locations - should not be in this table, these are club programs. All these 19 records are useless right now and not doing anything

 4: Leagues - do we need these?  EX: Thrive league and YBL (Youth BB League) should be a seprate record and not in event table. They are all wrong currently

 5: Training - may be obsolete, these are OGP training products, can remove them they're not be used

 6: College Placement Service - this is a product, not an event - shouldn't be here

 7: All Star Game - may be obsolete

 8: Passport Annual Membership - this is a product, not an event - shouldn't be here


 */
