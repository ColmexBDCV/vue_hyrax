
export default{
    name:'docs',
    props: ['docs'],
    template: "#docs",
    methods: {
        check_metadata(metadata, key) {

            if (!field_filter(key))
                return false

            if (typeof metadata == "object")
                if (metadata == null || metadata.length < 1) {
                    return false
                }

            if (typeof metadata === "string")
                if (metadata == "") {
                    return false
                }


            return true
        },
        isObject(o) {
            return typeof o == "object"
        }
    }
}