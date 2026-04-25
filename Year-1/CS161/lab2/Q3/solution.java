
public class solution {
    public static void main(String[] args) {
        char math = '+';
        int num1 = 9;
        int num2 = 3;

        if (math == '+') {
            System.out.println(num1 + num2);
        } else if (math == '-') {
            System.out.println(num1 - num2);
        } else if (math == '*') {
            System.out.println(num1 * num2);
        } else if (math == '/' && num2 != 0) {
            System.out.println(num1 / num2);
        }
    }
}
