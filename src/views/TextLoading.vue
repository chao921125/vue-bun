<template>
	<div class="main-body">
		<div class="main-content">
			<div class="list-grid">
				<div class="grid-item">
					<span class="ani_track title">Music</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Packaging Design</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Packaging Design</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Song</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">music video</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Storyboard</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
				</div>
				<div class="grid-item">
					<span class="ani_track title">Architecture</span>
<!--					<span class="ani_flashing duration">99：00</span>-->
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
		display: grid;
		grid-template-columns: repeat(12, 8.333%);
		grid-template-rows: repeat(50, 1rem);
		grid-template-areas: ". . . . . . . . . . . ."
		". . . . . t1 t1 t1 . . . ."
		". . . . . . . t2 t2 t2 . ."
		". . t3 t3 t3 . . . . . . ."
		". . . . . . . . . t4 t4 t4"
		". . . . . . t5 t5 t5 . . ."
		". . . t6 t6 t6 . . . . . ."
		"t7 t7 t7 . . . . . . . . ."
		". . . . . . . . t8 t8 t8 ."
		". . . . . . . . . t9 t9 t9"
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". t10 t10 t10 . . . . . . . ."
		". . . . . . . . . t11 t11 t11"
		". . . t12 t12 t12 . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . . . . . ."
		". . . . . . . t13 t13 t13 . ."
		". . . . . . . . t14 t14 t14 ."
		". . t15 t15 t15 . . . . . . .";
		.grid-item:nth-child(1) {
			grid-area: t1;
		}
		.grid-item:nth-child(2) {
			grid-area: t2;
		}
		.grid-item:nth-child(3) {
			grid-area: t3;
		}
		.grid-item:nth-child(4) {
			grid-area: t4;
		}
		.grid-item:nth-child(5) {
			grid-area: t5;
		}
		.grid-item:nth-child(6) {
			grid-area: t6;
		}
		.grid-item:nth-child(7) {
			grid-area: t7;
		}
		.grid-item:nth-child(8) {
			grid-area: t8;
		}
		.grid-item:nth-child(9) {
			grid-area: t9;
		}
		.grid-item:nth-child(10) {
			grid-area: t10;
		}
		.grid-item:nth-child(11) {
			grid-area: t11;
		}
		.grid-item:nth-child(12) {
			grid-area: t12;
		}
		.grid-item:nth-child(13) {
			grid-area: t13;
		}
		.grid-item:nth-child(14) {
			grid-area: t14;
		}
		.grid-item:nth-child(15) {
			grid-area: t15;
		}
		.grid-item {
			text-transform: uppercase;
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
