function solution(participant, completion) {
  sp = participant.sort()
  sc = completion.sort()
  for(i in sp)
    if(sp[i]!== sc[i])
      return sp[i]
}