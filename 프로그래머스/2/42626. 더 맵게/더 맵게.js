function solution(scoville, K) {
    const minHeap = new MinHeap();
    let mixCount = 0;
    
    // 모든 스코빌 지수를 힙에 추가
    for (const value of scoville) {
        minHeap.insert(value);
    }
    
    // 가장 작은 값이 K보다 작은 동안 반복
    while (minHeap.getMin() < K) {
        // 음식이 1개 이하로 남았다면 K 이상으로 만들 수 없음
        if (minHeap.size() <= 1) {
            return -1;
        }
        
        // 가장 맵지 않은 두 음식을 꺼내서 섞기
        const first = minHeap.remove();
        const second = minHeap.remove();
        const newFood = first + (second * 2);
        
        // 섞은 음식을 다시 힙에 넣기
        minHeap.insert(newFood);
        mixCount++;
    }
    
    return mixCount;
}

class MinHeap {
    constructor() {
        this.heap = [null]; // 0번 인덱스는 사용하지 않음
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] || 0;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    remove() {
        if (this.size() === 0) return null;
        
        const min = this.heap[1];
        const last = this.heap.pop();
        
        if (this.size() > 0) {
            this.heap[1] = last;
            this.bubbleDown();
        }
        
        return min;
    }
    
    bubbleUp() {
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);
        
        while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
            [this.heap[parentIdx], this.heap[currentIdx]] = 
                [this.heap[currentIdx], this.heap[parentIdx]];
            
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }
    
    bubbleDown() {
        let currentIdx = 1;
        let leftIdx = currentIdx * 2;
        let rightIdx = currentIdx * 2 + 1;
        
        while (leftIdx <= this.size()) {
            let minIdx = leftIdx;
            
            if (rightIdx <= this.size() && 
                this.heap[rightIdx] < this.heap[leftIdx]) {
                minIdx = rightIdx;
            }
            
            if (this.heap[currentIdx] <= this.heap[minIdx]) {
                break;
            }
            
            [this.heap[currentIdx], this.heap[minIdx]] = 
                [this.heap[minIdx], this.heap[currentIdx]];
            
            currentIdx = minIdx;
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1;
        }
    }
}