function solution(id_list, report, k) {
  const enumyObj = {};
  
  report.forEach((val) => {
      const [a, b] = val.split(' ');
      
      if(!enumyObj[b]) {
          enumyObj[b] = new Set([a])
      } else {
          enumyObj[b] = enumyObj[b].add(a)
      }
  })
  
  const arr = Object.keys(enumyObj).filter(key => enumyObj[key].size >= k)
  
  const result = [];
  for(let i = 0; i< id_list.length; i++) {
      const v = id_list[i];
      let count = 0;
      
      for(let j = 0; j <arr.length;j++) {
          const e_set = enumyObj[arr[j]];
          
          if(e_set.has(v)) count++;
      }
      result[i] = count;
  }
  return result;
}