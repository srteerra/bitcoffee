<template>
<div class="errorpage__container">
	<div class="errorpage__content">
		<p
			class="errorpage__title"
			style="margin: 0;"
		>
			<strong>404</strong>
		</p>
		<div>
			<p class="error-page__warning">
				Page not found :(
			</p>
		</div>
    <router-link to="/">
      <b-button class="px-5" variant="outline-dark" pill >
      Go back
    </b-button>
    </router-link>
		
	</div>
</div>
</template>

<script>
export default {
  name: "404View",
};
</script>

<style>
  .errorpage__container{
 height:100vh ;
 width: 100%;
 display:grid;
 place-content: center;
	
}
.errorpage__content{
		text-align: center;
}

.errorpage__title{
  font-size: 120px;
}

@media (max-width:400px) {
	.errorpage__title{
		font-size: 4em;
	}
	.errorpage__subtitle{
		font-size: 2em;
	}
	.errorpage__warning{
		font-size: 1em;
	}
}
</style>
