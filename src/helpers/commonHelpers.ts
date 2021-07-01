export const getAverageRunTime = (times:number[]) => {
  const sum = times?.reduce((acc : number, val : number) => acc + val);
  return sum / times?.length;
};

export const getTypeFromLocation = () => window.location.pathname.split('/')[1];

export const getYearFromDate = (date: string) => date && date.slice(0, 4);
