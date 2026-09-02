export const tags = {
  users: "Users",
  tickets: "Tickets",
 
} as const;

export type Tag = (typeof tags)[keyof typeof tags];

export const tagsArray: Tag[] = Object.values(tags);
