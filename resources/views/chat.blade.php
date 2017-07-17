@extends('layouts.app')

@section('content')
    <div id="app">
        <div class="panel-heading">
            CHATROOM
            <span class="badge pull-right">@{{ usersInRoom.length }}</span>
        </div>
        <!-- messagesGlobal in app.js defined -->
        <!-- v-bin:prop="data" -->
        <chat-log v-bind:messages="messagesGlobal"></chat-log>
        <!-- v-on:messageSent
        v-on:EVENT
        messageSent is defined in ChatComposer.vue -->
        <chat-composer v-on:messagesent="addMessage"></chat-composer>
    </div>
@endsection

    




