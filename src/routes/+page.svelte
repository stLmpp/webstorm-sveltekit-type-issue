<script lang="ts">

  import type { PageData } from './$types';

  export let data: PageData;

</script>

<!-- Doesn't auto complete, and show prop as unresolved -->
{data.numberProp}
