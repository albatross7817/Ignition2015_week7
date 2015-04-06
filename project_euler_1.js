var num =[ ];
for(i = 0; i < 1000; i++)
  {
    if((i % 3 === 0) || (i % 5 === 0))
    {
        num.push(i);
    }
  }
var sum = 0;
for(j = 0; j < num.length; j++)
  {
        sum += num[j];
  }
console.log(sum);
