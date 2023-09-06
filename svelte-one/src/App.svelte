<script lang="ts">
  import { Router } from "svelte-routing";
  import Navbar from "./lib/navigation/Navbar.svelte";
  import Routes from "./pages/Routes.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Navbar />
    <Routes />
  </div>
</Router>

<style>
</style>
