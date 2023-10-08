<script setup lang="ts">
	import {gg} from "hulk-sdk";
// 	import { Connex } from "@vechain/connex";

// const isInstalled = !!window.vechain
// console.log('VeWorld is installed: ', isInstalled);

// const connex = new Connex({
//   node: "https://mainnet.veblocks.net",
//   network: "main"
// });

// const vendor = new Connex.Vendor('main');

// async function login() {
// 	const cert = vendor.sign("cert", {
// 		purpose: "identification",
// 		payload: {
// 			type: "text",
// 			content: "Please login to continue"
// 		}
// 	});

// 	await cert.request().then((res) => {
// 		console.log(res);
// 	}, (err) => {
// 		console.log(err);
// 	});
// }
// const client = new AuthClient("main", "TetsApp");

// async function login() {
// 	const address = await client.login();
// 	console.log(address);
// }
gg();
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Skeleton.</h2>
		<button class="btn variant-filled">Login</button>
	</div>
</div>
