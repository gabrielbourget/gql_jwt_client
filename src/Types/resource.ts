export type Resource = {
  id: string;
  name: string;
  shorthand?: string;
  types?: string[];
  link?: string;
  value?: string;
  description?: string;
  children?: Resource[];
}
