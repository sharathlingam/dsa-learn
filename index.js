let nums = [1,1,1,2,2,4,5,6,7,8,8,9];

function removeDuplicatesInPlace() {

    let storage = {};
    let counter = 0;

    for(let i = 0; i < nums.length; i++) {

        if(!(nums[i] in storage)) {

            storage[nums[i]] = 1;
            nums[counter] = nums[i];
            ++counter;            
            
        } 

    }

    console.log(nums);

}

removeDuplicatesInPlace()

// nums = [1,1,1,2,2,4,5,6,7,8,8,9]
