export default function shouldBuyFidelity(times)
{
  let ticketCinema=12;
  let noFidelity=ticketCinema*times;
  let fidelity=250;

  for(let t=1; t<=times; t++)
    fidelity+=ticketCinema*Math.pow(0.75, t);

  return fidelity<noFidelity;
}
