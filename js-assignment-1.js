        // Task 1
        alert("Hello\nWorld!");

        // Task 2
        var firstName = "John";
        var lastName = "Doe";
        var age = 25;
        var city = "New York";

        alert("Name: " + firstName + " " + lastName + "\nAge: " + age + "\nCity: " + city);

        // Task 3
        var email = "example@example.com";
        alert("My email address is: " + email);

        // Task 4
        document.write("This is displayed through JavaScript.");

        // Task 5
        var age = 30;
        alert("My age is: " + age);

        // Task 6
        var birthYear = 1990;
        document.write("My birth year is: " + birthYear);

        // Task 7
        document.write("<h1>Rules for naming JS variables</h1>");
        document.write("Variable names can only contain letters, numbers, dollar signs, and underscores. <br>");
        document.write("Variables must begin with a letter, dollar sign, or underscore. <br>");
        document.write("Variable names are case sensitive. <br>");
        document.write("Variable names should not be JavaScript keywords.");

        // Task 8
        var num1 = 5;
        var num2 = 10;
        var sum = num1 + num2;
        document.write("The sum of " + num1 + " and " + num2 + " is " + sum + ".");

        // Task 9
        var num1 = 10;
        var num2 = 5;
        var subtract = num1 - num2;
        var multiply = num1 * num2;
        var divide = num1 / num2;
        var modulus = num1 % num2;

        document.write("Subtraction: " + subtract + "<br>");
        document.write("Multiplication: " + multiply + "<br>");
        document.write("Division: " + divide + "<br>");
        document.write("Modulus: " + modulus + "<br>");

        // Task 10
        var variable;
        document.write("Value after variable declaration is: " + variable + "<br>");
        variable = 5;
        document.write("Initial value: " + variable + "<br>");
        variable++;
        document.write("Value after increment is: " + variable + "<br>");
        variable += 7;
        document.write("Value after addition is: " + variable + "<br>");
        variable--;
        document.write("Value after decrement is: " + variable + "<br>");
        var remainder = variable % 3;
        document.write("The remainder is: " + remainder + "<br>");

        // Task 12
        var usDollars = 10;
        var saudiRiyals = 25;
        var exchangeRateUS = 155;
        var exchangeRateSaudi = 41;

        var totalCurrency = (usDollars * exchangeRateUS) + (saudiRiyals * exchangeRateSaudi);
        document.write("Total currency in Pakistani Rupees: " + totalCurrency);

        // Task 13
        var number = 7;
document.write("Result:<br>");
document.write("The value of a is: " + number + "<br>");
document.write("...........................................<br>");

document.write("The value of ++a is: " + (++number) + "<br>");
document.write("Now the value of a is: " + number + "<br>");

document.write("The value of a++ is: " + (number++) + "<br>");
document.write("Now the value of a is: " + number + "<br>");

document.write("The value of --a is: " + (--number) + "<br>");
document.write("Now the value of a is: " + number + "<br>");

document.write("The value of a-- is: " + (number--) + "<br>");
document.write("Now the value of a is: " + number + "<br>");