export const getAverageRunTime = (times:number[]) => {
  const sum = times?.length && times.reduce((acc : number, val : number) => acc + val);
  return (sum / times?.length) || 'unknown';
};

export const getYearFromDate = (date: string) => date && date.slice(0, 4);
