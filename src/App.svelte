<script>
  import { Router, Route } from "svelte-routing";
  import Home from "@Pages/Home/Home.svelte";
  
  export let baseUrl = "/";
</script>

<Router url="{baseUrl}">
  <Route path="/" component="{Home}" />
</Router>