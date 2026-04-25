
public class Solution {
    public static void main(String[] args) {
        int num = 13; 
        
        int i = 2;
        boolean isPrime = true;

        if (num < 2) {
            isPrime = false;
        }

        while (i <= num / 2) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
            i++;
        }

        if (isPrime) {
            System.out.println(num + " is a prime number");
        } else {
            System.out.println(num + " is NOT a prime number");
        }
    }
}
