export const formValidator = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  } else {
    return true;
  }
};

export const ErrorMessage = (e: unknown): string => {
  let errorMessage;
  if (e instanceof Error) {
    errorMessage = e.message;
  } else if (e && typeof e === "object" && "message" in e) {
    errorMessage = String(e.message);
  } else if (typeof e === "string") {
    errorMessage = e;
  } else {
    errorMessage = "Something went worng :( ";
  }
  return errorMessage;
};
