function majorityElementNby4(nums) {
    let candidate1 = null, count1 = 0;
    let candidate2 = null, count2 = 0;
    let candidate3 = null, count3 = 0;
    let candidate4 = null, count4 = 0;

    for (let num of nums) {

        if (num === candidate1) {
            count1++;
        } 
        else if (num === candidate2) {
            count2++;
        } 
        else if (num === candidate3) {
            count3++;
        }
        else if (num === candidate4) {
            count4++;
        }
        else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } 
        else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } 
        else if (count3 === 0) {
            candidate3 = num;
            count3 = 1;
        } 
        else if (count4 === 0){
            candidate4 = num;
            count4 = 1;
        }
        else {
            count1--;
            count2--;
            count3--;
            count4--;
        }
    }

    let threshold = Math.floor(nums.length / 5);
    let result = [];

    let freq1 = 0, freq2 = 0, freq3 = 0, freq4 = 0;

    for (let num of nums) {
        if (num === candidate1) freq1++;
        if (num === candidate2) freq2++;
        if (num === candidate3) freq3++;
        if (num === candidate4) freq4++;
    }

    if (freq1 > threshold) result.push(candidate1);
    if (freq2 > threshold) result.push(candidate2);
    if (freq3 > threshold) result.push(candidate3);
    if (freq4 > threshold) result.push(candidate4);

    return result;
}
