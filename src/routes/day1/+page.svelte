<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import { stringify } from 'postcss';
	import { fade, fly } from 'svelte/transition';

	const testText = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

	class CalibrationLine {
		line: string;

		constructor(line: string) {
			this.line = line;
		}

		firstDigitChar(): string {
			for (const char of this.line) {
				if (Number.isInteger(Number(char))) {
					return char;
				}
			}
			return '';
		}

		lastDigitChar(): string {
			for (const char of this.line.split('').reverse().join('')) {
				if (Number.isInteger(Number(char))) {
					return char;
				}
			}
			return '';
		}

		value(): number {
			return parseInt(this.valueString());
		}

		valueString(): string {
			return this.firstDigitChar().concat(this.lastDigitChar());
		}
	}

	let total = 0;
	async function part1() {
		total = 0;
		calibs = parse(testText);
		for (const calib of calibs) {
			console.log(calib.line);
			activeLine = calib.line;
			activeValue = calib.valueString();
			await delay(2000);
			total = total + calib.value();
		}
		activeLine = 'Total';
		activeValue = JSON.stringify(total);
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function parse(str: string): CalibrationLine[] {
		var lines = [];
		str.split('\n').forEach((element) => {
			lines.push(new CalibrationLine(element));
		});
		return lines;
	}

	let calibs: CalibrationLine[] = [];
	let activeLine = 'Waiting...';
	let activeValue = 'NaN';
</script>

<div data-theme="dracula">
	<Title title="Day 1"></Title>
	<div class="flex space-x-4">
		<Menu></Menu>
		<div class="container w-100% align-center">
			<button on:click={part1} class="object-center btn btn-secondary w-40">Part 1</button>
			<div class="flex-col content-center p-8 gap-x-8">
				{#key activeLine}
					<div
						in:fly|local={{ x: 500, delay: 500, duration: 300 }}
						out:fly|local={{ x: -500, duration: 300 }}
					>
						<Title title={activeLine}></Title>
					</div>
				{/key}

				{#key activeValue}
					<div
						in:fade|local={{ delay: 700, duration: 300 }}
						out:fly|local={{ x: 500, duration: 300 }}
					>
						<Title title={activeValue}></Title>
					</div>
				{/key}
			</div>
			<!-- <div class="text-xl">{total}</div> -->
		</div>
	</div>
</div>
