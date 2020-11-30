<template>
<div id="uploadUI">
    <file-browser :axiosConfig="{baseURL: 'http://localhost:8081'}" />
</div>
</template>

<script>

import FileBrowser from "vuetify-file-browser"

export default {
    components: {
        FileBrowser
    }
};
</script>