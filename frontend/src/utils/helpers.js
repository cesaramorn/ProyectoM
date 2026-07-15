export const parsePgArray = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    if (value.startsWith("{") && value.endsWith("}")) {
      return value.slice(1, -1).split(",").filter(Boolean);
    }
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch { /* not JSON */ }
  }
  return [];
};

export const toPgArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) return "{}";
  return `{${array.join(",")}}`;
};
