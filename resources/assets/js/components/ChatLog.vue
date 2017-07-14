<template lang="html">
	<div class="chat-log">
		<h2>CHATLOG</h2>
		<!-- singleMessage is just a named to show the relation-->
		<!-- messageToPass is bound so it can then be accessed in ChatMessage.vue -->
		<!-- messages is prepare from js and defined on <chat-log> in chat.blade.php -->

		<chat-message v-for="singleMessage in messages" v-bind:messageToPass="singleMessage"></chat-message>
	</div>		
</template>

<script>
	// messages is defined in chat.blad.php on <chat-log>
	export default {
		props: ['messages']		
	}
</script>
<style lang="css">
	.chat-log .chat-message:nth-child(even){
		background-color:#ccc;
	}
</style>