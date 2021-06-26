<template>
    <div class="list-card">
        <div class="list-card-title">
            {{ $route.params.id ? $route.params.id : 'No Route'}}
        </div>
    </div>
</template>

<style scoped>

    .list-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        width: 400px;
        height: 500px;
        padding: 10px;
        align-items: center;
    }

    .list-card-title {
        font-size: 22px;
    }
    
</style>