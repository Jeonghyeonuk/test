// ======== O(n) 테스트 ========
// 배열 합계 테스트
function testSumArray() {
    console.log("\n===== O(n) 배열 합계 테스트 =====");
    
    function sumArray(arr) {
      let sum = 0;
      let operations = 0;
      
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        operations++;
      }
      
      return { sum, operations };
    }
    
    const sizes = [10, 100, 1000, 10000];
    
    console.log("배열 크기 | 연산 횟수 ");
    console.log("---------------------------------------");
    
    sizes.forEach(size => {
      const arr = Array(size).fill(0).map((_, i) => i + 1);
      
      const result = sumArray(arr);
      
      console.log(`${size.toLocaleString().padStart(9)} | ${result.operations.toLocaleString().padStart(9)}`);
    });
    
    console.log("=> 배열 크기가 10배 증가하면 연산 횟수도 정확히 10배 증가(O(n))");
  }

  testSumArray()