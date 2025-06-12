function testArrayAccess() {
    console.log("===== O(1) 배열 요소 접근 테스트 =====");
    
    const smallArray = [0, 1, 2, 3, 4, 5];
    const largeArray = Array(1000000).fill(0).map((_, i) => i);
    
    const smallResult = smallArray[2];
    console.log(`작은 배열[2] 접근 결과: ${smallResult}`);
    
    const largeResult = largeArray[2];
    console.log(`1,000,000개 배열[2] 접근 결과: ${largeResult}`);
    
    const lastResult = largeArray[largeArray.length - 1];
    console.log(`1,000,000개 배열 마지막 요소 접근 결과: ${lastResult}`);
    console.log("=> 배열 크기에 관계없이 항상 1번의 연산으로 접근 가능(O(1))");
  }
  
  testArrayAccess()
 