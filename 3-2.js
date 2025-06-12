// 선형 검색 테스트
function testLinearSearch() {
    console.log("\n===== O(n) 선형 검색 테스트 =====");
    
    function linearSearch(arr, target) {
      let comparisons = 0;
      
      for (let i = 0; i < arr.length; i++) {
        comparisons++;
        
        // 상세 로깅은 작은 배열에서만
        if (arr.length <= 20) {
          console.log(`비교 ${comparisons}: arr[${i}] = ${arr[i]} vs ${target}`);
        }
        
        if (arr[i] === target) {
          if (arr.length <= 20) {
            console.log(`${comparisons}번 비교 후 찾음!`);
          }
          return { index: i, comparisons };
        }
      }
      
      if (arr.length <= 20) {
        console.log(`${comparisons}번 비교 후 요소를 찾지 못함`);
      }
      return { index: -1, comparisons };
    }
    
    // 작은 배열 테스트 (상세 출력)
    const smallArray = [5, 3, 8, 1, 9];
    console.log("작은 배열:", smallArray);
    
    const firstResult = linearSearch(smallArray, 5); // 첫 번째 요소
    console.log(`첫 요소 검색: 인덱스 ${firstResult.index}, 비교 횟수 ${firstResult.comparisons}\n`);
    
    const lastResult = linearSearch(smallArray, 9); // 마지막 요소
    console.log(`마지막 요소 검색: 인덱스 ${lastResult.index}, 비교 횟수 ${lastResult.comparisons}\n`);
    
    // 큰 배열 테스트 (요약 출력)
    const sizes = [100, 1000, 10000];
    
    console.log("배열 크기 | 첫 요소 | 중간 요소 | 마지막 요소 | 비율(마지막/n)");
    console.log("-------------------------------------------------------------");
    
    sizes.forEach(size => {
      const arr = Array(size).fill(0).map((_, i) => i);
      
      const firstResult = linearSearch(arr, 0); // 첫 번째 요소
      const midResult = linearSearch(arr, Math.floor(size/2)); // 중간 요소
      const lastResult = linearSearch(arr, size-1); // 마지막 요소
      
      const ratio = (lastResult.comparisons / size).toFixed(2);
      
      console.log(`${size.toLocaleString().padStart(9)} | ${firstResult.comparisons.toLocaleString().padStart(8)} | ${midResult.comparisons.toLocaleString().padStart(10)} | ${lastResult.comparisons.toLocaleString().padStart(12)} | ${ratio.padStart(12)}`);
    });
    
    console.log("=> 배열 크기가 10배 증가하면 최악의 경우 비교 횟수도 10배 증가(O(n))");
  }

  testLinearSearch()