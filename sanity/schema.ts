import pet from "./schemas/pet";
import { type SchemaTypeDefinition } from "sanity";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, product],
};
