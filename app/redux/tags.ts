export const tags = {
  users: "Users",
  routes: "Routes",
  seats: "Seats",
  trips: "Trips",
  passengers: "Passengers",
  bookings: "Bookings",
  counters: "Counters",
  checkins: "Checkins",
  flights: "Flights",
} as const;

export type Tag = (typeof tags)[keyof typeof tags];

export const tagsArray: Tag[] = Object.values(tags);
