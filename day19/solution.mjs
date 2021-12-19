export default function learn(maxTime, courses)
{
  let result=null;
  let sumResult=0;


  for(let index=0; index<courses.length; index++)
  {
    let currentCourseTime=courses[index];
    for(let index2=index+1; index2<courses.length; index2++)
    {
      let otherCourseTime=courses[index2];
      let sumCurrent=currentCourseTime+otherCourseTime;
      if(maxTime>=sumCurrent && sumCurrent>sumResult)
      {
        sumResult=sumCurrent;
        result=[index, index2];
      }
    }
  }

  return result;
}

/*export default function learn(maxTime, courses)
{
  let CoursesOrdered=[];

  for(let index in courses)
  {
    let currentCourse=courses[index]*1;
    if(currentCourse<maxTime)      CoursesOrdered.push({time: currentCourse, index: index*1});
  }

  CoursesOrdered.sort(function(a,b){return b.time-a.time;});

  let PossiblesSolutions=[];
  let maxPossibleSolution=0;

  for(let index=0; index<CoursesOrdered.length; index++)
  {
    let currentCourse=CoursesOrdered[index];
    for(let index2=index+1; index2<CoursesOrdered.length; index2++)
    {
      let anotherCourse=CoursesOrdered[index2];
      let sum=currentCourse.time+anotherCourse.time;
      if(sum <= maxTime  )
      {
        if(sum<maxPossibleSolution)
          continue;
        else if(sum>maxPossibleSolution)
        {
          maxPossibleSolution=sum;
          PossiblesSolutions=[];
        }
        if(currentCourse.index>anotherCourse.index)
          PossiblesSolutions.push([anotherCourse.index, currentCourse.index]);
        else
          PossiblesSolutions.push([currentCourse.index, anotherCourse.index]);

        break;
      }
    }
  }

  if(PossiblesSolutions.length>0)
  {
    if(PossiblesSolutions.length>1)
    {
      PossiblesSolutions.sort(function(a,b)
      {
        let sumCourseA=courses[a[0]]+courses[a[1]];
        let sumCourseB=courses[b[0]]+courses[b[1]];
        if(sumCourseA > sumCourseB) return 1;
        else   if(sumCourseA < sumCourseB) return -1;
        else return a[0]-b[0];
      });
    }
    return PossiblesSolutions[0];
  }else {
    return null;
  }
}*/