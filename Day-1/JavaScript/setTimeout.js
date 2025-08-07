//setTimeout for closure
//print 1,2,3.. after 1,2,3.. seconds
//to break it down -> you are trying to console.log something... as well as you are using a timer
for (var i = 1; i <= 5; i++) {
  function close(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  close(i);
}
