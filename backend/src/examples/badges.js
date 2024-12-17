/*

There are 108 badges total
----------------------------
3 badge categories
  1) Individual Game
  2) Average (min. 3 games)
  3) Total (max. 6 games)
----------------------------
6 badge stats
  1) Points (pts)
  2) Rebounds (rbs)
  3) Assists (ast)
  4) Steals (stl)
  5) Blocks (blk)
  6) 3 Pointers (three_pt)
----------------------------

All business logic to determine what badges are assigned to players will go in backend and not DB
For brands that do no participate in awards, we need a "canReceiveAwards" field for the brand

badges collection:
  _id:       66ad59f11191f7c1ebc72566
  type:      ["individual", "average", "cumalative"]
  name:      "60 Rebounds in an Event"
  url:       "https://grassroots365.com/wp-content/themes/g365-press/assets/badges/event-stats/event-totals/rebounds/rebounds-60.png"
  value:     60
  sqlId:     5
*/

const badgeExample = {
  _id: "66ad59f11191f7c1ebc72566",
  type: "cumalative", // ["individual", "average", "cumalative"],
  name: "60 Rebounds in an Event",
  url: "https://grassroots365.com/wp-content/themes/g365-press/assets/badges/event-stats/event-totals/rebounds/rebounds-60.png",
  value: "60",
  sqlId: 5,
};

const player = {
  player_id: 11239,
  badges: [
    {
      tournament_name: "The Championship Tournament Session I 2021",
      badge_type: "cumulative_individual_event",
      badge_name: "15 Points in an Event",
      badge_url: "https://example.com/badge/1",
      event_id: 357,
      game_id: 294,
      badge_data: [
        {
          event_id: 357,
          player_id: 11239,
          season_year: "2021",
          per_event_game: 8,
          cumulative_stat: 45.0,
        },
      ],
      enabled: true,
      created_at: "2023-09-11T22:34:04",
      updated_at: "2024-08-27T18:49:41",
    },
    {
      badge_id: 2,
      tournament_name: "G365 Fallfest Tournament 2021",
      badge_type: "cumulative_individual_event",
      badge_name: "15 Points in an Event",
      badge_url: "https://example.com/badge/2",
      event_id: 415,
      admin_addition: false,
      badge_data: [
        {
          event_id: 415,
          player_id: 11239,
          season_year: "2021",
          per_event_game: 8,
          cumulative_stat: 30.0,
        },
      ],
      enabled: true,
      created_at: "2023-08-21T09:26:04",
      updated_at: "2024-08-27T18:49:41",
    },
  ],
};

// const player = {
//   player_id: 11239,
//   badges: [
//     {
//       badge_id: 1,
//       tournament_name: "The Championship Tournament Session I 2021",
//       badge_type: "cumulative_individual_event",
//       badge_name: "15 Points in an Event",
//       badge_url: "https://example.com/badge/1",
//       event_id: 357,
//       admin_addition: false,
//       badge_data: [
//         {
//           event_id: 357,
//           player_id: 11239,
//           season_year: "2021",
//           per_event_game: 8,
//           cumulative_stat: 45.0,
//         },
//       ],
//       enabled: true,
//       created_at: "2023-09-11T22:34:04",
//       updated_at: "2024-08-27T18:49:41",
//     },
//     {
//       badge_id: 2,
//       tournament_name: "G365 Fallfest Tournament 2021",
//       badge_type: "cumulative_individual_event",
//       badge_name: "15 Points in an Event",
//       badge_url: "https://example.com/badge/2",
//       event_id: 415,
//       admin_addition: false,
//       badge_data: [
//         {
//           event_id: 415,
//           player_id: 11239,
//           season_year: "2021",
//           per_event_game: 8,
//           cumulative_stat: 30.0,
//         },
//       ],
//       enabled: true,
//       created_at: "2023-08-21T09:26:04",
//       updated_at: "2024-08-27T18:49:41",
//     },
//   ],
// };
