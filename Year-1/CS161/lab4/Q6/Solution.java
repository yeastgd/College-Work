
public class Solution {
    public static void main(String[] args) {
        String eircode = "W23V6V8";
        String routingKey = eircode.substring(0, 3);
        String identifier = eircode.substring(3);
        String area = "";

        if (routingKey.equals("A86")) {
            area = "Dunboyne";
        } else if (routingKey.equals("X35")) {
            area = "Dungarvan";
        } else if (routingKey.equals("R45")) {
            area = "Edenderry";
        } else if (routingKey.equals("W23")) {
            area = "Maynooth";
        } else if (routingKey.equals("V14")) {
            area = "Shannon";
        } else {
            area = "Other";
        }

        System.out.println("Key:" + routingKey + "-Identifier:" + identifier + "-Area:" + area + ".");
    }
}
