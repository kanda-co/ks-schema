export const getStructureName = (name: string): string => {
  const parts = name.split(".");
  if (parts.slice(-1)[0] === "value") return name;
  return `${name}.value`;
};
