<template lang="html">
	<div class="chat-message">
		<p>{{ messageToPass.message }}</p>
		<small>{{ messageToPass.user.name }}</small>
	</div>		
</template>

<script>
	export default {
		//accepting properties
		//messageToPass is passed from ChatLog.vue
		props: ['messageToPass']
		//following is LOCAL DATA
		// data () {
		// 	return {
		// 		message: "this is some message text",
		// 		user: "john doe"
		// 	}
		// }
	}
</script>
<style lang="css">
	.chat-message {
		padding: 1rem;
	}
	.chat-message > p {
		margin-bottom: .5rem;
	}
</style>