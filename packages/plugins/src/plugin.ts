class EspressoPlugin {
    plugins = []
    constructor() {
        this.plugins = []
    }

    init() {
        console.log('[expresso plugin] plugin inited')
    }

    mounted() {
        console.log('[expresso plugin] plugin mounted')
    }

    run() {
        console.log('[expresso plugin] plugin run')
    }

    unmounted() {
        console.log('[expresso plugin] plugin unmounted')
    }

    destroyed() {
        console.log('[expresso plugin] plugin destroyed')
    }
}

const espressoPlugin = new EspressoPlugin();

export default espressoPlugin;