@extends('layouts.app')

@section('content')
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
@endsection

    




