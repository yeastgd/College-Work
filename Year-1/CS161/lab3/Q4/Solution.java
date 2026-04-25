
public class Solution {
    public static void main(String[] args) {
        int num = 24; 

        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                System.out.print(i);
                if (i != num) {
                    System.out.print(",");
                }
            }
        }
        System.out.println();
    }
}
