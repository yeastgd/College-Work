
public class Solution {
    public static void main(String[] args) {
        for (int num = 10000; num <= 99999; num++) {
            
            // 1. Проверяем, является ли число палиндромом
            int originalNum = num;
            int digit1 = num / 10000;
            int digit2 = (num / 1000) % 10;
            int digit3 = (num / 100) % 10;
            int digit4 = (num / 10) % 10;     
            int digit5 = num % 10;             

            if (digit1 == digit5 && digit2 == digit4) {

                if (num % 53 == 0) {

                    System.out.println(num);
                    System.out.println(digit1);
                    System.out.println(digit2);
                    System.out.println(digit3);
                    System.out.println(digit4);
                    System.out.println(digit5);
                    System.out.println("**********");
                }
            }
        }
    }
}
