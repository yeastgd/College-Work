
public class Solution {
    public static void main(String[] args) {
        int days = 3; 
        
        int currentDay = 1;
        int totalSaved = 0;
        int dailyAmount = 1; 

        while (currentDay <= days) {
            totalSaved += dailyAmount;
            dailyAmount *= 2;
            currentDay++;
        }

        System.out.println(totalSaved);
    }
}
