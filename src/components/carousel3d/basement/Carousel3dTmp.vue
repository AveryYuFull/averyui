<script>
export default {
    props: {
        /**
         * slide的数量
         */
        count: {
            type: [Number, String],
            default: 0
        },
        /**
         * slide的倾斜角度
         */
        perspective: {
            type: [Number, String],
            default: 35
        },
        /**
         * 显示的slide的个数
         */
        display: {
            type: [Number, String],
            default: 5
        },
        /**
         * 切换动画时长(单位ms)
         */
        duration: {
            type: [Number, String],
            default: 500
        },
        /**
         * 从右到左显示
         */
        dir: {
            type: String,
            default: 'rtl'
        },
        /**
         * slide的宽度
         */
        width: {
            type: [Number, String],
            default: 360
        },
        /**
         * slide的高度
         */
        height: {
            type: [Number, String],
            default: 270
        },
        /**
         * slide的border
         */
        border: {
            type: [Number, String],
            default: 1
        },
        /**
         * slide之间的间距
         */
        space: {
            type: [Number, String],
            default: 'auto'
        }
    }
}
</script>
