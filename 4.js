// ======== O(n²) 테스트 ========
// 모든 요소 쌍 처리 테스트
function testPairProcessing() {
    console.log("\n===== O(n²) 요소 쌍 처리 테스트 =====");
    
    function processPairs(arr) {
      let count = 0;
      
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          // 실제 처리 대신 단순 카운트만
          count++;
          
          // 작은 배열에서만 상세 로깅
          if (arr.length <= 5 && count <= 10) {
            console.log(`쌍 ${count}: (${i}, ${j})`);
          } else if (arr.length <= 5 && count === 11) {
            console.log("... 나머지 쌍 생략 ...");
          }
        }
      }
      
      return count;
    }
    
    const sizes = [5, 10, 50, 100];
    
    console.log("배열 크기 | 처리된 쌍 | n² | 비율(쌍/n²)");
    console.log("----------------------------------------");
    
    sizes.forEach(size => {
      const arr = Array(size).fill(0);
      
      const count = processPairs(arr);
      const squared = size * size;
      const ratio = (count / squared).toFixed(2);
      
      console.log(`${size.toLocaleString().padStart(9)} | ${count.toLocaleString().padStart(10)} | ${squared.toLocaleString().padStart(3)} | ${ratio.padStart(10)}`);
    });
    
    console.log("\n크기 증가에 따른 연산 횟수 비교:");
    console.log("5² = 25 쌍");
    console.log("10² = 100 쌍 (5의 2배 크기 → 쌍은 4배)");
    console.log("50² = 2,500 쌍 (5의 10배 크기 → 쌍은 100배)");
    console.log("100² = 10,000 쌍 (5의 20배 크기 → 쌍은 400배)");
    
    console.log("=> 배열 크기가 2배 증가하면 연산 횟수는 4배(2²) 증가(O(n²))");
  }
  
  testPairProcessing()