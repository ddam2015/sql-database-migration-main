const organization = {
  schemaVersion: "v1",
  id: "66ad59f11191f7c1ebc72566",
  sqlId: 123,
  name: "Oceanside Sports Club",
  type: "Club", // 0 = nothing, 1 = club, 2 = school, 3 = college
  abbreviation: "OSC",
  logoKey:
    "organizations/oceanside-sports-club_8536_66ad59f11191f7c1ebc72566.png",
  directorFirst: "John",
  directorLast: "Doe",
  directorEmail: "jdoe@gmail.com",
  directorPhone: "760-390-3323",
  email: "director@oceansidesportsclub.com",
  phone: "760-390-3323",
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90001",
    county: "Los Angeles", // do we need this? - Nick and Justin don't think so, even though it's still in SPP manager
    country: "USA",
  },
  website: "3dbasketball.net",
  socialLinks: {
    facebook: "johndoe",
    twitter: "johndoe123",
    instagram: "john_insta",
  },
  nickname: "oceanside-sports-club-ca", // need to rename this field, and come up with better URL appendange such as random 5 digit number on end
  urlSlug: "oceanside-sports-club-ca-49389", // need to make it like this
  access: { G3P: [16655], SPP: [65738, 65769, 65769, 65769] },
  searchList: "Oceanside Sports Club, OSC", // don't think we need this since we can search on multiple fields

  // Default for all objects
  createdAt: "2023-01-01 00:00:00",
  createdBy: "66ad59f11191f7c1ebc72566",
  updatedAt: "2023-01-02 00:00:00",
  isDeleted: false,
  deletedAt: null,
  deletedBy: null,
};
