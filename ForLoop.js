var x=0;
for(x;x<10;x++);
console.log(x);

{
    
var a=0;
var b =0;
while (a <3)
{
a++;
b += a;
console.log(b);
}
}

{
    function testBreak(x) {
        let i = 0;
      
        while (i < 6) {
          if (i === 3) {
            (function () {
  //            break;
            })();
          }
          i += 1;
        }
      console.log(x)

        return i * x;
    }
      testBreak(1);

    }