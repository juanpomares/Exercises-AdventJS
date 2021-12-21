export default function canCarry(capacity, trip)
{
  if(trip.length==0) return true;
  let importantPoints=[];

  for(let index=0; index<trip.length; index++)
  {
    let currentTrip=trip[index];
    let currentCapacity=currentTrip[0];
    if(currentCapacity>capacity) return false;

    if(importantPoints[currentTrip[1]]==undefined) importantPoints[currentTrip[1]]=0;
    if(importantPoints[currentTrip[2]]==undefined) importantPoints[currentTrip[2]]=0;

    importantPoints[currentTrip[1]]+=currentCapacity;
    importantPoints[currentTrip[2]]-=currentCapacity;
  };

  let currentCapacity=0;

  for(let position=0; position<importantPoints.length; position++)
  {
    if(importantPoints[position]!==undefined)
    {
      currentCapacity+=importantPoints[position];
      if(currentCapacity>capacity) return false;
    }
  }

  return true;
}
/*

export default function canCarry(capacity, trip)
{
  if(trip.length==0) return true;

  let carryPoints=[];
  let deliveryPoints=[];
  let giftsCount=[];

  let maxDeliveryPoint=0;

  for(let index=0; index<trip.length; index++)
  {
    let currentTrip=trip[index];
    if(currentTrip[0]>capacity) return false;
    giftsCount.push(currentTrip[0]);
    carryPoints.push(currentTrip[1]);
    deliveryPoints.push(currentTrip[2]);
    if(maxDeliveryPoint<currentTrip[2])
      maxDeliveryPoint=currentTrip[2];
  };

  let actualCapacity=0;
  let tripPoint=0;

  for(let position=0; position<maxDeliveryPoint; position++)
  {
    //Comprobamos si soltamos algún regalo en este punto
    if(actualCapacity!=0)
    {
      let deliveredGifts=find(tripPoint, deliveryPoints, position);
      for(let i=0; i<deliveredGifts.length; i++)
        actualCapacity-=giftsCount[deliveredGifts[i]];
    }

    //Comprobamos si hay que coger regalos
    let carryGifts=find(tripPoint, carryPoints, position);
    if(carryGifts.length!=0)
    {
      for(let i=0; i<carryGifts.length; i++)
      {
        actualCapacity+=giftsCount[carryGifts[i]];
        if(actualCapacity>capacity) return false;
        tripPoint=carryGifts[i];
      }
    }
  }

  return true
}

function find(indexInitial, array, valueF)
{
  let solution=[];
  for(let index=indexInitial; index<array.length; index++)
  {
    if(array[index]==valueF) solution.push(index);
  }
  return solution;
}
*/
