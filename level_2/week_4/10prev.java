import java.util.*;
class Solution {
    public boolean solution(String[] arr) {
        boolean answer = true;
        Set<String> set = new HashSet<>();
        
        for(String s : arr) {
            if(set.size() == 0) set.add(s);
            else{
                if(set.contains(s) || isPrev(set, s)) return false;
                set.add(s);
            }
        }
        
        return answer;
	}
    
    static boolean isPrev(Set<String> set, String s) {
        for(String set_s : set) {
            if(s.length() > set_s.length()){
                if(s.substring(0, set_s.length()).equals(set_s)) return true;
                
            }else if(set_s.substring(0, s.length()).equals(s)) return true;
        }
        return false;
    }

}