import { type SchemaTypeDefinition } from "sanity";

import curriculum from "./schemas/curriculum";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [curriculum],
};
