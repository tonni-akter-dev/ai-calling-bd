export const tags = {
  users: "Users",
  tickets: "Tickets",
  contacts: "Contacts",
 
} as const;

export type Tag = (typeof tags)[keyof typeof tags];

export const tagsArray: Tag[] = Object.values(tags);
