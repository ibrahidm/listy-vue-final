<template>
    <div id="footer"
    >
        <div class="footer-inner">
            <span class="footer-label">Created By</span> 
            <a href="https://github.com/ibrahidm" target="_blank"> Dr. Danny Ibrahim, PharmD </a> 
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'
export default {
    setup (): void {
        const windowWidth = ref(window.innerWidth)
        const windowHeight = ref(window.innerHeight)

        const positionFooter = () => {
            const footer = document.getElementById('footer')
            if (footer) {
                footer.style.marginLeft = '271px'
                footer.style.width = `${ window.visualViewport.width - 271 }px`;
                footer.style.top = `${ window.visualViewport.height - 55}px`;
            }
        }

        window.addEventListener('resize', () => {
            windowHeight.value = window.innerHeight
            windowWidth.value = window.innerWidth
        })

        watch([windowHeight, windowWidth], positionFooter)

        onMounted(() => {
            positionFooter()
        })
    }
}
</script>

<style scoped>
    #footer {
        display: flex;
        position: fixed;
        border-top: 1px solid #dfe1e5;
        justify-content: center;
        background-color: white;
    }

    .footer-inner {
        display: flex;
        align-items: center;
        height: 55px;
        padding: 0 20px;
        font-size: 12px;
    }

    .footer-label {
        font-weight: 600;
        margin-right: 8px;
    }
</style>