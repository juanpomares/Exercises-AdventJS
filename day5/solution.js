export default function daysToXmas(date) 
{
  const xMasDay=new Date("Dec 25, 2021");

  const newDate=new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);  

  let  difference=xMasDay-newDate;

  return Math.floor(difference/(24*60*60*1000));
}