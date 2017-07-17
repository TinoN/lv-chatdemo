<template lang="html">
	<div class="chat-composer">
		<!-- v-model bind is input to a vue model, so that the content of messagText will be displayed/populated in/to the input element-->
		<!-- v-on:keyup.enter entspricht @keydown.enter -->
		<input id="message" type="text" name="message" placeholder="start typing your message..." v-model="messageText" v-on:keyup.enter="sendMessage">
		<button class="btn btn-primary" @click="sendMessage">Send</button>
	</div>		
</template>

<script>
	export default {
		data () {
			return {
				messageText: ''
			}
		},
		methods: {
			//event emitters and listeners from vue
			//$emit is for passing
			//messageSent can be called on the element it was called (<chat-composer> in chat.blade.php)
			//in this.$emit 'messagesent' darf keine grossbuchstaben enthalten!!! (??????....)
			sendMessage () {
				this.$emit('messagesent', {
					message: this.messageText,
					user: {
						name: $('.navbar-right .dropdown-toggle').text()
					}
				});
				this.messageText = '';
			}
		}
	}
</script>
<style lang="css">
	.chat-composer {
		display: flex;
	}
	.chat-composer input {
		flex: 1 auto;
	}
	.chat-composer button {
		border-radius: 0;
	}
</style>