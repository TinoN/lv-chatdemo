<!doctype html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>CHATROOM</title>
    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
    <div id="app">
        <h1>CHATROOM</h1>
        <!-- messagesGlobal in app.js defined -->
        <!-- v-bin:prop="data" -->
        <chat-log v-bind:messages="messagesGlobal"></chat-log>
        <!-- v-on:messageSent
        v-on:EVENT
        messageSent is defined in ChatComposer.vue -->
        <chat-composer v-on:messagesent="addMessage"></chat-composer>
    </div>
<script type="text/javascript" src="js/app.js"></script>
</body>
</html>




