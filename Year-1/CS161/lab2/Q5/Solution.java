
public class Solution {
    public static void main(String Args[]){
        int year = 2023;
        int month = 10;
        String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
        int days = 0;
        if(month < 1 || month > 12){
            System.out.println("Not a valid month");
        } else {
            
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                days = 31;
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                days = 30;
            } else if (month == 2){
                if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                    days = 29;
                } else {
                    days = 28;
                }
            }
        }

        System.out.println("In " + months[month-1] + " " + year + " there were " + days + " days");
    }
}

