
public class Solution {
    public static void main(String[] args) {
        int start = 10;
        int end = 15;

        for (int num = start; num <= end; num++) {

            if (num % 3 == 0 && num % 5 == 0) {
                System.out.print("fizzbuzz");
            } else if (num % 3 == 0) {
                System.out.print("fizz");
            } else if (num % 5 == 0) {
                System.out.print("buzz");
            } else {
                System.out.print(num);
            }

            if (num < end) {
                System.out.print(" ");
            }
        }
    }
}
