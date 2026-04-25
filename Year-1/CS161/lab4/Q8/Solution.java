
public class Solution {
    public static void main(String[] args) {
        String addSpaces = "cup of tea";

        for (int i = 0; i < addSpaces.length(); i++) {
            char currentChar = addSpaces.charAt(i);
            System.out.print(currentChar);
            if (currentChar != ' ' && i < addSpaces.length() - 1) {
                System.out.print(" ");
            }
        }
        System.out.println();
    }
}
