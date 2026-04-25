
public class Solution {
    public static void main(String[] args) {
        String text1 = "programming";
        String text2 = "development";

        boolean isExactlySame = text1.equals(text2);
        System.out.println("Exactly the same: " + (isExactlySame ? "True" : "False"));

        if (!isExactlySame) {
            boolean isSimilar = text1.equalsIgnoreCase(text2);
            System.out.println("Similar: " + (isSimilar ? "True" : "False"));
        }
    }
}
