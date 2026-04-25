
public class Solution {
    public static void main(String[] args) {
        String reverse = "programming";
        String reversedResult = "";

        for (int i = reverse.length() - 1; i >= 0; i--) {
            reversedResult += reverse.charAt(i);
        }
        
        System.out.println(reversedResult);
    }
}
