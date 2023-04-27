         var usDollars = 10;
        var saudiRiyals = 25;
        var exchangeRateUS = 155;
        var exchangeRateSaudi = 41;

        var totalCurrency = (usDollars * exchangeRateUS) + (saudiRiyals * exchangeRateSaudi);
        document.write("Total currency in Pakistani Rupees: " + totalCurrency);
