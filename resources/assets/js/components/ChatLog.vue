<template lang="html">
	<div class="chat-log">
		<h2>CHATLOG</h2>
		<!-- singleMessage is just a named to show the relation-->
		<!-- messageToPass is bound so it can then be accessed in ChatMessage.vue -->
		<!-- messages is prepare from js and defined on <chat-log> in chat.blade.php -->
		<!-- fuer :key="singleMessage.user"
		siehe: https://vuejs.org/v2/guide/list.html#key -->

		<chat-message v-for="singleMessage in messages" v-bind:messageToPass="singleMessage" :key="singleMessage.id"></chat-message>
		<div class="empty" v-show="messages.length === 0">Nothing here yet!</div>
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
	.empty {
		padding: 1rem;
		text-align: center;
	}
</style>