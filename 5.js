function fibonacciRecursive(n) {
    // 기본 사례 (base case)
    if (n <= 1) return n;
    
    // 재귀 호출 (recursive call)
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Function to measure execution time and count function calls
function measureFibonacciPerformance(n) {
    // 함수 호출 횟수 추적 (tracking function call count)
    let callCount = 0;
    
    // 원래 함수를 감싸서 호출 횟수 카운트 (wrap original function to count calls)
    const wrappedFibonacci = (function() {
        const memoization = new Map();
        
        function countingFibonacci(num) {
            callCount++;
            
            // 기본 사례 (base case)
            if (num <= 1) return num;
            
            // 재귀 호출 (recursive calls)
            return countingFibonacci(num - 1) + countingFibonacci(num - 2);
        }
        
        return countingFibonacci;
    })();
    
    // 시간 측정 및 피보나치 계산 (measure time and calculate fibonacci)
    console.log(`\n--- 성능 테스트 (n = ${n}) ---`);
    
    const startTime = performance.now();
    const result = wrappedFibonacci(n);
    const endTime = performance.now();
    
    const executionTime = endTime - startTime;
    
    console.log(`결과: ${result.toLocaleString()}`);
    console.log(`총 함수 호출 횟수: ${callCount.toLocaleString()}`);
    console.log(`실행 시간: ${executionTime.toFixed(2)} 밀리초`);
    
    return {
        result,
        callCount,
        executionTime
    };
}

// Run comprehensive tests with various input sizes
function runComprehensiveTest() {
    const testInputs = [20, 30, 40, 41, 42, 43];
    
    console.log("🔍 피보나치 재귀 시간 복잡도 종합 테스트 🔍");
    
    const results = testInputs.map(n => measureFibonacciPerformance(n));
    
    // 요약 테이블 생성 (create summary table)
    console.log("\n--- 요약 테이블 ---");
    
    // 열 너비 정의 (column width definition)
    const colWidth = {
        n: 8,
        result: 15,
        calls: 15,
        time: 15
    };
    
    // 헤더 행 출력 (print header row)
    console.log(
        "n".padEnd(colWidth.n) + 
        "| 결과".padEnd(colWidth.result.toLocaleString()) + 
        "| 함수 호출 횟수".padEnd(colWidth.calls.toLocaleString()) + 
        "| 실행 시간 (밀리초)"
    );
    
    // 구분선 출력 (print separator line)
    console.log("-".repeat(colWidth.n + colWidth.result + colWidth.calls + colWidth.time + 3));
    
    // 데이터 행 출력 (print data rows)
    results.forEach((result, index) => {
        const n = testInputs[index].toLocaleString().padEnd(colWidth.n - 1);
        const resultStr = result.result.toLocaleString().padEnd(colWidth.result - 2);
        const callsStr = result.callCount.toLocaleString().padEnd(colWidth.calls - 2);
        const timeStr = result.executionTime.toFixed(2);
        
        console.log(`${n} | ${resultStr} | ${callsStr} | ${timeStr}`);
    });
}

// 종합 테스트 실행 (run the comprehensive test)
runComprehensiveTest();