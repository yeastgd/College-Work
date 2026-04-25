
public class Solution {
    public static void main(String[] args) {
       String text = "Most guitars have six strings.";

        int textLength = text.length();

        int hPosition = text.indexOf('h');

        String lowerText = text.toLowerCase();

        String upperText = text.toUpperCase();

        System.out.println("String Length: " + textLength);
        System.out.println("Position of first 'h': " + hPosition);
        System.out.println(lowerText);
        System.out.println(upperText); 
    }
}
