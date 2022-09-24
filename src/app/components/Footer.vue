<template>
	<footer class="py-5">
		<b-container class="py-5">
			<b-row class="p-0">
				<b-col
					cols="12"
					md="6"
					lg="3"
					class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
				>
					<ul class="text-ligth p-0">
						<li class="py-2 font-weight-bold">
							Menu
						</li>
						<li class="py-2">
							<router-link to="/">
								Back to top
							</router-link>
						</li>
						<li class="py-2">
							<router-link to="/about">
								Beacome a creator
							</router-link>
						</li>
						<li class="py-2">
							<router-link to="/how">
								Q&A
							</router-link>
						</li>
					</ul>
				</b-col>
				<b-col
					cols="12"
					md="6"
					lg="3"
					class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
				>
					<ul class="text-ligth p-0">
						<li class="py-2 font-weight-bold">
							Others
						</li>
						<li class="py-2">
							<router-link to="/">
								Terms and conditions
							</router-link>
						</li>
						<li class="py-2">
							<router-link to="/about">
								Our branding
							</router-link>
						</li>
						<li class="py-2">
							<router-link to="/how">
								Repository
							</router-link>
						</li>
            <li class="py-2">
							<router-link to="/how">
								Licence
							</router-link>
						</li>
					</ul>
				</b-col>
				<b-col cols="10" md="12" lg="6" class="pt-5 pt-lg-0 mx-auto">
					<b-row
						class="d-flex justify-content-center justify-content-lg-end text-center text-lg-left px-3 px-md-0"
					>
						<ul class="text-ligth p-0">
							<li class="py-2 font-weight-bold">
								Contact us
							</li>
							<li class="py-2">
                <router-link to="/how">
                example@bitcoffee.com
							</router-link>
							</li>
						</ul>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  @import '../assets/variables.scss';
  footer {
    background-color: $secondary;
    color:#FFFFFF;
    z-index: 20px;
  }
  .poweredLogos {
    max-width: 250px;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 50%;
    }
  }
  </style>

