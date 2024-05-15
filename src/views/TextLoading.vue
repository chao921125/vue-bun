<template>
	<div class="main-body">
		<div class="main-content">
			<div class="list-grid">
				<div class="grid-item">
					<span class="ani_track title">This is Test Text</span>
					<span class="ani_flashing duration">99：00</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="">

</script>

<style scoped lang="scss">
	.main-body {
		width: 100%;
		height: 100vh;
		background-color: #FFF;
		color: #000;
	}
	.main-content {
		position: relative;
		z-index: 1;
	}
	.list-grid {
		.grid-item {
			.title {
				opacity: 0;
				cursor: pointer;
				font-size: 1rem;
				white-space: nowrap;
				&:hover {
					font-weight: bold;
					color: #00ff00;
				}
			}
			.ani_track {
				&.title {
					position: relative;
					opacity: 1;
					-webkit-animation: text-appear 1s steps(1) 1;
					animation: text-appear 1s steps(1) 1;
				}
				&.title:after {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: 0;
					background-color: #000;
					-webkit-animation: block-appear 1s ease-in-out 1;
					animation: block-appear 1s ease-in-out 1;
				}
			}

			.ani_flashing {
				opacity: 1;
				animation-direction: reverse;
				-webkit-animation: fade-in 1.5s linear 1;
				animation: fade-in 1.5s linear 1;
				&:after {
					animation-direction: reverse;
				}
				&.duration {
					opacity: 1;
					animation-direction: reverse;
					//-webkit-animation: blink 1.5s ease-in-out infinite;
					//animation: blink 1.5s ease-in-out infinite;
				}
			}
		}
	}

	@-webkit-keyframes text-appear {
		0% {
			color: transparent;
		}
		50% {
			color: #000;
		}
		100% {
			color: #000;
		}
	}

	@keyframes text-appear {
		0% {
			color: transparent;
		}
		50% {
			color: #000;
		}
		100% {
			color: #000;
		}
	}

	@-webkit-keyframes block-appear {
		0% {
			width: 0;
		}
		40% {
			width: 100%;
			left: 0;
		}
		80% {
			left: 100%;
			width: 0;
		}
		100% {
			left: 100%;
			width: 0;
		}
	}

	@keyframes block-appear {
		0% {
			width: 0;
		}
		40% {
			width: 100%;
			left: 0;
		}
		80% {
			left: 100%;
			width: 0;
		}
		100% {
			left: 100%;
			width: 0;
		}
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}

		65% {
			opacity: 0;
		}

		90% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}

		65% {
			opacity: 0;
		}

		90% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes blink {
		0% {
			opacity: 1;
		}

		6% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		94% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}
	@keyframes blink {
		0% {
			opacity: 1;
		}

		6% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		94% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}

</style>
