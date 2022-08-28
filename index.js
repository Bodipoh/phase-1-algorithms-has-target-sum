function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0; 1 < array.length; i++){
    let complexity = array.splice(0, 1);
    if(array.includes(target-complexity)){
      return true;
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/// it has a time complexity of 0(n)

/* 
  Add your pseudocode here
*///select the first element
//check if the array includes target-first element
//return true

/*
  Add written explanation of your solution here
*///create 2 loops,the first loop creates identical copy of array,second loop iterates through the array trying different combinations that adds to the target

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
