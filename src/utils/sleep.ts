/**
 * Sleep helper function
 * @param timeInMS Time in Milliseconds to wait
 * @returns Promise resolves after the given time
 */
export const sleep = async (timeInMS: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, timeInMS));
};
