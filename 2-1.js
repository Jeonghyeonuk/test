// ======== O(log n) 테스트 ========
// 2로 몇번 나눌수 있는지 테스트
function testDivisions() {
  console.log("\n===== O(log n) 2로 나누기 테스트 =====");
  
  function countDivisions(n) {
    let count = 0;
    let num = n;
    console.log(`시작 숫자: ${n.toLocaleString()}`);
    
    while (num > 1) {
      num = Math.floor(num / 2);
      count++;
      console.log(`단계 ${count}: ${num.toLocaleString()}`);
    }
    
    return count;
  }
  
  const testSizes = [16, 1000000, 2000000];
  
  
  testSizes.forEach(size => {
    const result = countDivisions(size);
    console.log(`===== 숫자 크기: ${size.toLocaleString().padStart(7)} =====`);
    console.log(`=====2로 나누기 횟수: ${result.toLocaleString().padStart(2)} =====`);
  });
  
  console.log("=> 입력이 2배로 증가해도 연산 횟수는 단 1회만 증가(O(log n))");
}

testDivisions()