// 이진 탐색 테스트
function testBinarySearch() {
    console.log("\n===== O(log n) 이진 탐색 테스트 =====");
    
    function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      let steps = 0;
      
      console.log(`배열 크기: ${arr.length}, 탐색 대상: ${target}`);
      
      while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);
        
        console.log(`단계 ${steps}: 검색 범위 [${left}-${right}], 중간값 ${mid}`);
        
        if (arr[mid] === target) {
          console.log(`${steps}단계 만에 찾음! 인덱스: ${mid}`);
          return { index: mid, steps };
        }
        
        if (arr[mid] < target) {
          left = mid + 1;
          console.log(`→ 오른쪽 절반으로 이동`);
        } else {
          right = mid - 1;
          console.log(`→ 왼쪽 절반으로 이동`);
        }
      }
      
      console.log(`${steps}단계 후 요소를 찾지 못함`);
      return { index: -1, steps };
    }
    
    // 여러 크기의 배열에 대한 테스트
    const sizes = [16, 1000, 10000, 100000, 1000000, 2000000];
    
    sizes.forEach(size => {
      const arr = Array(size).fill(0).map((_, i) => i);
      const mid = Math.floor(size / 2);
      // 상세 로그는 작은 배열에만 출력
      if (size <= 1000) {
        const result = binarySearch(arr, mid);
        console.log();
      } else {
        // 큰 배열은 로그 없이 결과만
        let left = 0;
        let right = arr.length - 1;
        let steps = 0;
        
        while (left <= right) {
          steps++;
          const mid = Math.floor((left + right) / 2);
          
          if (arr[mid] === arr[Math.floor(size/2)]) {
            break;
          }
          
          if (arr[mid] < arr[Math.floor(size/2)]) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        
        const result = { index: Math.floor(size/2), steps };
        
        console.log(`배열 크기 :${size.toLocaleString().padStart(10)}`);
        console.log(`검색 단계 :${result.steps.toLocaleString().padStart(10)}`);
      }
    });
    
    console.log("=> 배열 크기가 2배로 증가할 때 검색 단계는 약 1단계만 증가(O(log n))");
}

testBinarySearch()