<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="
    A temperature converter helps in the conversion of the measurement units of the temperature recorded in a particular unit. Temperature expresses the degree of heat or cold of a solid, liquid, or gas. Temperature is measured using a thermometer.">

    <meta name="keywords" content="temperature converter, convert celsius to fahrenheit, convert fahrenheit to celsius">

    <!-- Favicon -->
    <link rel="shortcut icon" href="./Img/favicon.ico" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <!-- Style CSS -->
    <link rel="stylesheet" href="./CSS/style.css">

    <title>Temperature Converter</title>
</head>

<body>
<marquee behavior="scroll" direction="up">
    <h1 class="text-center"> <span id="fa" class="fa"></span> This is temperature converter</h1></marquee>

    <form class="text-center" id="tempCalc" onsubmit="calculateTemp(); return false">
        <label for="temp">Please Enter the Temperature you'd like to convert.</label>
        <div class="row my-3">
            <div class="col">
                <input type="number" step="any" id="temp" class="form-control">
            </div>
            <div class="col">
                <select name="temp_diff" class="form-control" id="temp_diff">
                    <option value="cel"><span>&#176;</span>Celsius</option>
                    <option value="fah"><span>&#176;</span>Fahrenheit</option>
                </select>
            </div>
        </div>

        <!-- <input type="submit" class="d-flex justify-content-center mx-auto" name="temp"> -->
        <button type="submit" class="btn btn-danger d-flex justify-content-center mx-auto my-2">Submit</button>
        <br />
        <span id="resultContainer"></span>
    </form>

    <!-- Script JS -->
    <script src="./Js/script.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/c387a6ff36.js" crossorigin="anonymous"></script>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>
</body>

</html> 