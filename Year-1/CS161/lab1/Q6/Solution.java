
public class Solution {
    public static void main(String[] args) {
        int num = 1981;

        int d4 = num % 10;          // 1
        int d3 = (num / 10) % 10;   // 8
        int d2 = (num / 100) % 10;  // 9
        int d1 = (num / 1000) % 10; // 1

        System.out.println("The digits in the number " + num + " are:");
        System.out.println(d1);
        System.out.println(d2);
        System.out.println(d3);
        System.out.println(d4);
    }
}
