export default function Theme() {

    return (
        {
            components: {
                ScrollView: {
                    defaultProps: {
                        overScrollMode: "never",
                    },
                }

            }
        }
    )
}