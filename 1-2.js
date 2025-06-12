 
  // 두 수의 연산 테스트
  function testCalculation() {
    console.log("\n===== O(1) 연산 테스트 =====");
    
    const smallResult = { 
      sum: 5 + 10, 
      product: 5 * 10 
    };
    console.log(`작은 숫자 연산 결과: ${JSON.stringify(smallResult)}`);
    
    const largeResult = { 
      sum: 9999999 + 9999999, 
      product: 9999999 * 9999999 
    };
    console.log(`큰 숫자 연산 결과: ${JSON.stringify(largeResult)}`);
    console.log("=> 숫자 크기에 관계없이 항상 일정한 연산 횟수 필요(O(1))");
  }
  
  testCalculation()