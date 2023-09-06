<script lang="ts">
  import { Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Merch from "./Merch.svelte";
  import About from "./About.svelte";

  interface Route {
    path: string;
    component: any;
  }

  const routes: Route[] = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/merch",
      component: Merch,
    },
  ];
</script>

<div>
  {#each routes as route}
    <Route path={route.path} component={route.component} />
  {/each}
</div>
