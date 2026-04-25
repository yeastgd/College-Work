
public class Solution {
    public static void main(String[] args) {
        String text = "navan";

        String originalUpper = text.toUpperCase();
        String reversedText = "";

        for (int i = originalUpper.length() - 1; i >= 0; i--) {
            reversedText += originalUpper.charAt(i);
        }

        if (originalUpper.equals(reversedText)) {
            System.out.println(originalUpper + " is a palindrome");
        } else {
            System.out.println(originalUpper + " is NOT a palindrome");
        }
    }
}
