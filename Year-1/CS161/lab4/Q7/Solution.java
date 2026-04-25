
public class Solution {
    public static void main(String[] args) {
        String sentence = "He found peace in nature far from the city life";
        String[] words = sentence.split(" ");

        for (int i = words.length - 1; i >= 0; i--) {
            System.out.println(words[i]);
        }
    }
}
