<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body class="text-center p-4">
        <!-- <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
            properly without JavaScript enabled. Please enable it to
            continue.
            </strong>
        </noscript> -->
        <div id="app">
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
