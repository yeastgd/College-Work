# Eircode (Lab 4, Q6)

## Task Description
An Eircode is a unique 7-character code consisting of letters and numbers. Each Eircode consists of a 3-character routing key to identify the area and a 4-character unique identifier for each address, for example W23 F854. The routing key is the first three characters of an Eircode. The unique identifier is a group of 4 characters and comes after the routing key.

You are required to write a program that stores an Eircode in a String called eircode and print out the routing key and the unique identifier of that Eircode.
It should then determine which area the Eircode belongs to, based on the following routing key values:

Dunboyne: A86
Dungarvan: X35
Edenderry: R45
Maynooth: W23
Shannon: V14


You must use a String variable called eircode which is described and initialised as follows: 
String eircode = "W23V6V8";
Make sure that you match the format of the output exactly as shown below.

## Sample Input 1
```text
    W23F484
```
## Sample Output 1
```text
    Key:W23-Identifier:F484-Area:Maynooth.
```
## Sample Input 2
```text
    R45W2R4
```
## Sample Output 2
```text
    Key:R45-Identifier:W2R4-Area:Edenderry.
```
## Sample Input 3
```text
    R14V7V8
```
## Sample Output 3
```text
    Key:R14-Identifier:V7V8-Area:Other.
```
